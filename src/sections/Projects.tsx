import { Float, Text3D, useTexture } from "@react-three/drei"
import { BillBoard } from "../components/models/BillBoard"
import { Texture } from "three"

const Projects = () => {

  const projects = [
    {
      name: "Addidas 3D Experience",
      description: "Addidas webiste reimagine in 3D",
      image:"https://res.cloudinary.com/dbgzq41x2/image/upload/v1761912505/Screenshot_from_2025-10-31_17-32-50_rpihsp.png",
      link: 'https://awwwards-adidas.vercel.app/',
    },
    {
      name: "Lazy VFX",
      description: "The VFX Engine for Game Devs",
      image: "projects/project5.png",
      link: "https://lazy-vfx.vercel.app/",
    },
    {
      name: "GulfStream",
      description: "GulfStream sites reimagined in 3D",
      image: "projects/project7.png",
      link: "https://gulf-stream.vercel.app/",
    },
    {
      name: "Fireworks VFX",
      description: "Fireworks VFX made using Lazy VFX Enigne",
      image: "projects/project6.png",
      link: "https://fireworks-five-sigma.vercel.app/",
    },
    {
      name: "Wizard Game",
      description: "Wizard Game made using Lazy VFX Enigne",
      image: "projects/project8.png",
      link: "https://wizard-game-sable.vercel.app/"
    },
    {
      name: "Senova AI",
      description: "3D Sites for Senova AI",
      image: "projects/project9.png",
      link: "https://senova.in/"
    },
    {
      name: "Spike Labs",
      description: "Model Generator Using AI",
      image: "projects/project10.png",
      link: "https://spikelabs.vercel.app/",
    },
  ]

  // Use the correct type for useTexture usage
  const tex: Texture = useTexture(projects[0].image)
  const tex1: Texture = useTexture(projects[1].image)
  const tex2: Texture = useTexture(projects[2].image)
  const tex3: Texture = useTexture(projects[3].image)

  return (
    <group position-x={60}>
      <Float floatIntensity={0.6}>
        {/* <Center disableY disableZ> */}
        <Text3D
          font={"/fonts/Inter_Bold.json"}
          size={0.5}
          position-y={3}
          position-z={1}
          position-x={3}
          rotation-y={-Math.PI / 2 - 0.4}
          bevelEnabled
          bevelThickness={0.3}
          castShadow
          receiveShadow
        >
          PROJECTS
          <meshStandardMaterial color={"#E6E6FA"} />
        </Text3D>

        {/* </Center> */}
      </Float>
      <BillBoard texture={tex} link={projects[0].link} position={[0, 0, -7]} rotation-y={-0.4} scale={40} />
      <BillBoard texture={tex1} link={projects[1].link} position={[2.5, 0, -4]} rotation-y={-1.3} scale={40} />
      <BillBoard texture={tex2} link={projects[2].link} position={[0, 0, 7]} rotation-y={-3} scale={40} />
      <BillBoard texture={tex3} link={projects[3].link} position={[2.5, 0, 4.5]} rotation-y={-2} scale={40} />
    </group>
  )
}

export default Projects
