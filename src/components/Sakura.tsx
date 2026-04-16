import { useEffect, useRef, useState } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  swayPhase: number;
  swaySpeed: number;
  swayAmp: number;
  rotation: number;
  rotSpeed: number;
  opacity: number;
  imgIndex: number;
}

interface SakuraEffectProps {
  /** Number of petals (default: 35) */
  count?: number;
  /** Wind strength — positive = rightward (default: 1.2) */
  wind?: number;
  /** Fall speed multiplier (default: 1) */
  speed?: number;
  /** Z-index of the canvas (default: 0) */
  zIndex?: number;
  /** CSS class applied to the <canvas> element */
  className?: string;
}

// Replace these with the actual paths to your sakura leaf textures (PNG with transparent BG, about 128x128px recommended)
const SAKURA_IMG_SOURCES = [
  'https://png.pngtree.com/png-clipart/20250102/original/pngtree-cherry-blossom-petal-png-download-png-image_5447487.png',
  'https://cdn.creazilla.com/cliparts/7814267/sakura-petal-clipart-original.png',
  'https://png.pngtree.com/png-clipart/20250102/original/pngtree-cherry-blossom-petal-png-download-png-image_5447487.png',
  'https://cdn.creazilla.com/cliparts/7814267/sakura-petal-clipart-original.png',
];

// Preload texture images
function useSakuraImages(sources: string[]) {
  const [imgs, setImgs] = useState<(HTMLImageElement | null)[]>(Array(sources.length).fill(null));
  useEffect(() => {
    let alive = true;
    let loaded = Array(sources.length).fill(false);
    const imgArr: (HTMLImageElement | null)[] = imgs.slice();
    sources.forEach((src, i) => {
      const img = new window.Image();
      img.src = src;
      img.crossOrigin = "anonymous";
      img.onload = () => {
        loaded[i] = true;
        imgArr[i] = img;
        if (alive && loaded.every(Boolean)) setImgs([...imgArr]);
      };
      img.onerror = () => {
        loaded[i] = true;
        imgArr[i] = null;
        if (alive && loaded.every(Boolean)) setImgs([...imgArr]);
      };
    });
    return () => { alive = false; };
    // We don't want to rerun when imgs change, only sources
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sources.join(',')]);
  return imgs;
}

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function createPetal(W: number, H: number, fromTop: boolean, imgCount: number): Petal {
  return {
    x: rand(-40, W + 40),
    y: fromTop ? rand(-H, 0) : rand(-20, H),
    size: rand(12, 20), // Slightly larger for image tex
    speedY: rand(0.5, 1.4),
    swayPhase: rand(0, Math.PI * 2),
    swaySpeed: rand(0.008, 0.025),
    swayAmp: rand(30, 90),
    rotation: rand(0, Math.PI * 2),
    rotSpeed: rand(-0.03, 0.03),
    opacity: rand(0.5, 0.95),
    imgIndex: Math.floor(Math.random() * imgCount),
  };
}

// Draws sakura petal using image texture
function drawPetalWithImage(ctx: CanvasRenderingContext2D, p: Petal, images: (HTMLImageElement|null)[]) {
  const img = images[p.imgIndex];
  if (!img) return;

  const s = p.size;
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.rotation);
  ctx.globalAlpha = p.opacity;
  // Center & scale image. Assumes image is roughly square.
  ctx.drawImage(img, -s/2, -s/2, s, s); 
  ctx.restore();
}

export default function Sakura({
  count = 35,
  wind = 1.2,
  speed = 1,
  zIndex = 0,
  className,
}: SakuraEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Load sakura petal images
  const images = useSakuraImages(SAKURA_IMG_SOURCES);

  // Keep mutable config in a ref so the animation loop always sees latest values
  const configRef = useRef({ count, wind, speed });
  useEffect(() => {
    configRef.current = { count, wind, speed };
  }, [count, wind, speed]);

  useEffect(() => {
    if (images.some(img => !img)) return; // Wait for all images to be loaded

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let petals: Petal[] = [];
    let rafId: number;
    let windTime = 0;
    let isPaused = false;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width = Math.floor(W * dpr);
      canvas!.height = Math.floor(H * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      petals = Array.from({ length: configRef.current.count }, () =>
        createPetal(W, H, false, images.length)
      );
    }

    function syncCount() {
      const target = configRef.current.count;
      if (petals.length < target) {
        while (petals.length < target) petals.push(createPetal(W, H, true, images.length));
      } else if (petals.length > target) {
        petals.length = target;
      }
    }

    function loop() {
      if (isPaused) {
        rafId = requestAnimationFrame(loop);
        return;
      }

      syncCount();
      ctx!.clearRect(0, 0, W, H);

      windTime += 0.005;
      const dynamicWind =
        configRef.current.wind + Math.sin(windTime) * 0.3;

      for (const p of petals) {
        p.swayPhase += p.swaySpeed;
        p.x +=
          Math.sin(p.swayPhase) * p.swayAmp * 0.05 +
          dynamicWind * 0.6;
        p.y += p.speedY * configRef.current.speed;
        p.rotation += p.rotSpeed * configRef.current.speed;

        if (p.y > H + 20 || p.x > W + 60 || p.x < -60) {
          Object.assign(p, createPetal(W, H, true, images.length));
        }

        drawPetalWithImage(ctx!, p, images);
      }

      rafId = requestAnimationFrame(loop);
    }

    resize();
    rafId = requestAnimationFrame(loop);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleVisibility = () => {
      isPaused = document.hidden || media.matches;
    };

    handleVisibility();
    media.addEventListener('change', handleVisibility);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      media.removeEventListener('change', handleVisibility);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
    // Only rerun if all images loaded
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.every(img => !!img)]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex,
      }}
    />
  );
}