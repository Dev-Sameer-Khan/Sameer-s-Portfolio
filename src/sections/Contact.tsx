import { Float, Text3D } from "@react-three/drei"
import { XLogo } from "../components/models/XLogo"
import { Linkedin } from "../components/models/Linkedin"
import { GitHub } from "../components/models/Guithub"
import { Email } from "../components/models/Email"
import { Mailbox } from "../components/models/Mailbox"
import { ParkBench } from "../components/models/ParkBench"

const Contact = () => {

  return (
    <group position-x={80}>
      <Float floatIntensity={0.6}>
        <XLogo position={[-1,0,-3]} scale={0.3} />
        <Linkedin position={[-1,1,-4]} scale={0.3} />
        <GitHub position={[-1,2,-4]} scale={0.3} />
      <Email position={[2-1,0,2]} scale={10} />
      </Float>

      <Float floatIntensity={0.6}>
        {/* <Center disableY disableZ> */}
          <Text3D
            font={"/fonts/Inter_Bold.json"}
            size={0.5}
            position-y={3}
            position-z={1}
            position-x={3}
            rotation-y={-Math.PI / 2 - 0.4  }
            bevelEnabled
            bevelThickness={0.3}
            castShadow
             receiveShadow
          >
            CONTACT 
            <meshStandardMaterial color={"#E6E6FA"} />
          </Text3D>
 
        {/* </Center> */}
      </Float>
      <Text3D
            font={"/fonts/Inter_Bold.json"}
            size={0.5}
            position-y={0}
            position-z={-6}
            position-x={-1}
            rotation-y={-Math.PI / 2 + 0.4  }
            bevelEnabled
            bevelThickness={0.3}
            castShadow receiveShadow
          >
            SAMEER KHAN
            <meshStandardMaterial color={"#E6E6FA"} />
          </Text3D>
          <Text3D
            font={"/fonts/Inter_Bold.json"}
            size={0.5}
            position-y={-1}
            position-z={-5}
            position-x={-1}
            rotation-y={-Math.PI / 2 + 0.4  }
            bevelEnabled
            bevelThickness={0.3}
            castShadow receiveShadow
          >
            U.P INDIA
            <meshStandardMaterial color={"#E6E6FA"} />
          </Text3D>
          <Mailbox position={[0,-0.3,3]} scale={0.6} rotation-y={-Math.PI - 0.5}/>
          <ParkBench position={[0,-1,5]} scale={0.9} rotation-y={-Math.PI - 0.5}/>
    </group>
  )
}

export default Contact
