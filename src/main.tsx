import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Cursor from './components/Cursor.tsx'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { lenis } from './lenisInstance'
import LoadingScreen from './components/LoadingScreen.tsx'


gsap.registerPlugin(ScrollTrigger)

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cursor/>
    <LoadingScreen/>  
    <App />
  </StrictMode>,
)
