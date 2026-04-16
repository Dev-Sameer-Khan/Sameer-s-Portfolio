import { Center, Float, Text3D } from "@react-three/drei";
import { MacBookPro } from "../components/models/MacBookPro";
import { config } from "../../constants";
import { useMobile } from "../components/hooks/useMobile";

const Home = () => {

    const { isMobile } = useMobile();

  return (
    <group>
      {/* <Star position-z={-1} position-y={3.5} scale={0.3} /> */}
      <Float floatIntensity={2} speed={2}>
        <MacBookPro
          position-x={-3}
          position-y={0}
          position-z={0}
          scale={0.5}
          rotation-y={Math.PI / 4}
          castShadow
        />
      </Float>
      {/* <PalmTree
        scale={0.03}
        rotation-y={degToRad(140)}
        position={[isMobile ? 2 :4, -1, -5]}
      /> */}

      <Float floatIntensity={0.6}>
        <Center disableY disableZ>
          <Text3D
            font={"/fonts/Inter_Bold.json"}
            size={0.8}
            position-y={1.5}
            position-z={-3}
            bevelEnabled
            bevelThickness={0.3}
            castShadow
            receiveShadow
          >
            {config.home.title}
            <meshStandardMaterial color={"#E6E6FA"} />
          </Text3D>
        </Center>
      </Float>
      <Center disableY disableZ>
        <Text3D
          font={"/fonts/Inter_Bold.json"}
          size={1.2}
          position-x={isMobile? -1 :-2.6}
          position-y={-1}
          position-z={-3}
          bevelEnabled
          bevelThickness={0.3}
          rotation-y={Math.PI / 10}
          castShadow
          receiveShadow
        >
          {config.home.subtitle}
          <meshStandardMaterial color={"#E6E6FA"} />
        </Text3D>
        {/* <Text3D
        visible={isMobile}
          font={"/fonts/Inter_Bold.json"}
          size={isMobile? 0.5 :1.2}
          position-x={1}
          position-y={0.7}
          position-z={-3}
          bevelEnabled
          bevelThickness={0.3}
          rotation-y={Math.PI / 10}
          castShadow
          receiveShadow
        >
          {config.home.msubtitle}
          <meshStandardMaterial color={"#E6E6FA"} />
        </Text3D>
        <Text3D
        visible={isMobile}
          font={"/fonts/Inter_Bold.json"}
          size={isMobile? 0.5 :1.2}
          position-x={1}
          position-z={-3}
          bevelEnabled
          bevelThickness={0.3}
          rotation-y={Math.PI / 10}
        >
          {config.home.msubtitle1}
          <meshStandardMaterial color={"#E6E6FA"} />
        </Text3D> */}
      </Center>
    </group>
  );
};

export default Home;
