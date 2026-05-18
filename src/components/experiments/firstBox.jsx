import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  useGLTF,
  Line,
  Text3D,
} from "@react-three/drei";
import modelUrl from "../models/LP-61FMBR.glb";

// Standard JSON font required by Drei's Text3D (Loaded from a public CDN)
const FONT_URL = "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json";

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
  const [hovered, setHovered] = useState(true);

  // Define the target corner vertex where the three axes intersect
  // Adjust these coordinates slightly to match the physical front-left corner of your GLTF model
  const originCorner = [-0.8, -0.35, 0.5]; 

  return (
    <div 
      style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, background: '#0a0a0a' }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Canvas
        style={{ width: "100%", height: "100%", display: 'block' }}
        camera={{ position: [2.5, 1.8, 3.5], fov: 45 }}
      >
        <ambientLight intensity={0.7} />
        <Environment preset="warehouse" />
        
        {/* Everything inside this group rotates together flawlessly */}
        <group position={[0, 0, 0]}>
          <ProductModel />

          {/* Core Blueprint Geometry */}
          <group visible={hovered}>
            
            {/* ==========================================
                HEIGHT AXIS (Green - Strict Z/Y Up)
               ========================================== */}
            <Line
              points={[originCorner, [originCorner[0], originCorner[1] + 0.5, originCorner[2]]]}
              color="#00ff00"
              lineWidth={2}
              dashed
              dashSize={0.05}
              gapSize={0.03}
            />
            <group position={[originCorner[0] - 0.1, originCorner[1] + 0.25, originCorner[2]]} rotation={[0, 0, Math.PI / 2]}>
              <Text3D font={FONT_URL} size={0.07} height={0.005}>
                34 mm
                <meshBasicMaterial color="#00ff00" />
              </Text3D>
            </group>


            {/* ==========================================
                WIDTH AXIS (Red - Horizontal Front Edge)
               ========================================== */}
            <Line
              points={[originCorner, [originCorner[0] + 1.6, originCorner[1], originCorner[2]]]}
              color="#ff0000"
              lineWidth={2}
              dashed
              dashSize={0.05}
              gapSize={0.03}
            />
            <group position={[originCorner[0] + 0.6, originCorner[1] - 0.12, originCorner[2]]}>
              <Text3D font={FONT_URL} size={0.07} height={0.005}>
                97 mm
                <meshBasicMaterial color="#ff0000" />
              </Text3D>
            </group>


            {/* ==========================================
                LENGTH AXIS (Cyan - Receding Depth Edge)
               ========================================== */}
            <Line
              points={[originCorner, [originCorner[0], originCorner[1], originCorner[2] - 1.0]]}
              color="#00f0ff"
              lineWidth={2}
              dashed
              dashSize={0.05}
              gapSize={0.03}
            />
{/* Main Label */}
<group position={[originCorner[0] - 0.15, originCorner[1] - 0.1, originCorner[2] - 0.70]} rotation={[0, -Math.PI / 2, 0]}>
  <Text3D font={FONT_URL} size={0.07} height={0.005}>
    162 mm
    <meshBasicMaterial color="#00f0ff" />
  </Text3D>
</group>
{/* Subscript Detail Label */}
<group position={[originCorner[0] - 0.15, originCorner[1] - 0.18, originCorner[2] - 0.69]} rotation={[0, -Math.PI / 2, 0]}>
  <Text3D font={FONT_URL} size={0.045} height={0.002}>
    142 mm (Body only)
    <meshBasicMaterial color="#888888" />
  </Text3D>
</group>

          </group>
        </group>

        <ContactShadows
          position={[0, -0.4, 0]}
          opacity={0.35}
          scale={6}
          blur={2}
          far={2.5}
        />
        
        <OrbitControls
          enablePan={false}
          enableDamping
          dampingFactor={0.05}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Canvas>
    </div>
  );
}

export default FloatingBox;