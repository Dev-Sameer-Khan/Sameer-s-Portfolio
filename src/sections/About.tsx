import { Float, Text, Text3D} from "@react-three/drei"
import { Fountain } from "../components/models/Fountain"
import { InfoBoard } from "../components/models/InfoBoard"

const About = () => {


  return (
    <group position-x={20}>
      {/* <Float> */}
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
            About 
            <meshStandardMaterial color={"#E6E6FA"} />
          </Text3D>
 
        {/* </Center> */}
      </Float>
   <mesh position={[1.9,0,4.95]} rotation-y={-2.15}>
    <planeGeometry args={[4.75,3.8]}/>
    <meshStandardMaterial transparent opacity={1} color={"#E6E6FA"}/>
    <Text  maxWidth={4} fontSize={0.3} textAlign="center" position-z={0.01} position-y={0.7} color={"hotpink"}>
        Hello, I'm Sameer Khan, a professional Frontend Developer based in India with a passion for creative and innovative web experiences.
   
    </Text>
   </mesh>
      {/* </Float>   */}
      <Fountain position={[1,-0.5,-6]} rotation-x={-0.1} rotation-z={-0.05} scale={0.8}/>
<InfoBoard position={[2,-1,5]} scale={1.8} rotation-y={1}/>
    </group>
  )
}

export default About
