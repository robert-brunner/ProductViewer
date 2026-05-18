import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  useGLTF,
} from "@react-three/drei";
import modelUrl from "../models/LP-61FMBR.glb";

function ProductModel() {
  const { scene } = useGLTF(modelUrl);
  return (
    <primitive
      object={scene}
      scale={0.01}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

const FloatingBox = () => {
  return (
    <div className="w-full h-full bg-black" style={{ width: '100%', height: '100%' }}>
      <Canvas
        style={{
          width: "100%",
          height: "100%",
        }}
        camera={{ position: [0, 2, 5], fov: 45 }}
      >
        <ambientLight intensity={0.5} />
        <Environment preset="warehouse" />
        <ProductModel />
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.4}
          scale={10}
          blur={2}
          far={4}
        />
        <OrbitControls
          enablePan={false}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}

export default FloatingBox;