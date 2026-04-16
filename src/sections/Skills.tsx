import { Float, Text3D } from "@react-three/drei"
import { HTML } from "../components/models/HTML"
import { CSS } from "../components/models/CSS"
import { Tailwind } from "../components/models/Tailwind"
import { JS } from "../components/models/JS"
import { THREEJS } from "../components/models/THREE"
import { Figma } from "../components/models/Figma"
import { REACT } from "../components/models/React"

const Skills = () => {

  return (
    <group position-x={40}>
            <Float floatIntensity={0.6}>
        {/* <Center disableY disableZ> */}
          <Text3D
            font={"/fonts/Inter_Bold.json"}
            size={0.5}
            position-y={2}
            position-z={4}
            position-x={5}
            rotation-y={-Math.PI / 2 - 0.4  }
            bevelEnabled
            bevelThickness={0.3}
            castShadow
            receiveShadow
          >
            SKILLS
            <meshStandardMaterial color={"#E6E6FA"} />
          </Text3D>
 
        {/* </Center> */}
        
      </Float>


      <Float floatIntensity={0.6}>
        <HTML scale={0.003} position={[1,0,2]} rotation={[0,-2,0]}/>
        <CSS scale={0.003} position={[1,0,4]} rotation={[0,-2,0]}/>
        <Tailwind scale={5} position={[1,2,5]} rotation={[-Math.PI/2,Math.PI,-Math.PI/4]}/>
        <JS scale={5} position={[1,1,3]} rotation={[0,-2,0]}/>
        <REACT scale={0.2} position={[1,1,5]} rotation={[0,1,0]}/>
        <THREEJS scale={0.008} position={[1,0,3]} rotation={[-Math.PI/2,Math.PI,-Math.PI/4]}/>
        <Figma scale={0.2} position={[1,2,4]} rotation={[-Math.PI/2,Math.PI,-Math.PI/4]}/>
      </Float>


      <Text3D
            font={"/fonts/Inter_Bold.json"}
            size={0.5}
            position-y={2}
            position-z={-7}
            // position-x={-1}
            rotation-y={-Math.PI / 2 + 0.4  }
            bevelEnabled
            bevelThickness={0.3}
            castShadow receiveShadow
          >
            THREE JS
            <meshStandardMaterial color={"#E6E6FA"} />
          </Text3D>
          <Text3D
            font={"/fonts/Inter_Bold.json"}
            size={0.5}
            position-y={1}
            position-z={-7}
            // position-x={-1}
            rotation-y={-Math.PI / 2 + 0.4  }
            bevelEnabled
            bevelThickness={0.3}
            castShadow receiveShadow
          >
            FRONTEND
            <meshStandardMaterial color={"#E6E6FA"} />
          </Text3D>
          <Text3D
            font={"/fonts/Inter_Bold.json"}
            size={0.5}
            position-y={0}
            position-z={-7}
            // position-x={-1}
            rotation-y={-Math.PI / 2 + 0.4  }
            bevelEnabled
            bevelThickness={0.3}
            castShadow receiveShadow
          >
            DEVELOPMENT
            <meshStandardMaterial color={"#E6E6FA"} />
          </Text3D>
          <Text3D
            font={"/fonts/Inter_Bold.json"}
            size={0.5}
            position-y={-1}
            position-z={-7}
            // position-x={-1}
            rotation-y={-Math.PI / 2 + 0.4  }
            bevelEnabled
            bevelThickness={0.3}
            castShadow receiveShadow
          >
            UI & UX
            <meshStandardMaterial color={"#E6E6FA"} />
          </Text3D>
    
    </group>
  )
}

export default Skills
