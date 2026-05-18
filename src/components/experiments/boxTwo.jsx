import { useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  useGLTF,
  Html,
} from "@react-three/drei";
import * as THREE from "three";
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

function DynamicLabels({ hovered }) {
  const { camera } = useThree();
  const mainContainerRef = useRef();

  useFrame(() => {
    if (!mainContainerRef.current) return;

    const target = new THREE.Vector3(0, 0, 0);
    const distance = camera.position.distanceTo(target);

    const closeThreshold = 4.2; 
    const baseOffset = 0;
    let pushFactor = baseOffset;

    if (distance < closeThreshold) {
      const scale = (closeThreshold - distance) / closeThreshold;
      pushFactor = Math.pow(scale, 1.8) * 850; 
    }

    mainContainerRef.current.style.setProperty('--push', `${pushFactor}px`);
  });

  return (
    <Html position={[0, 0, 0]} center>
      <div 
        ref={mainContainerRef}
        style={{
          position: 'relative',
          width: '300px',
          height: '200px',
          pointerEvents: 'none',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'scale(1)' : 'scale(0.95)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
          color: '#00e6ff',
          fontFamily: 'monospace',
          fontSize: '12px',
          fontWeight: 'bold',
          textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
          '--push': '0px'
        }}
      >
        {/* Height Label - Rockets out to the Left */}
        <div style={{ 
          position: 'absolute', 
          top: '40%', 
          left: 'calc(-20px - var(--push))', 
          borderLeft: '2px dashed #00e6ff', 
          paddingLeft: '5px',
          transition: 'left 0.05s linear'
        }}>
          34 mm (Tall)
        </div>

        {/* Width Label - Rockets down past the Bottom */}
        <div style={{ 
          position: 'absolute', 
          bottom: 'calc(10% - var(--push))', 
          left: '35%', 
          borderBottom: '2px dashed #00e6ff', 
          paddingBottom: '2px',
          transition: 'bottom 0.05s linear'
        }}>
          97 mm (Wide)
        </div>

        {/* Length Label - Rockets out to the Right */}
        <div style={{ 
          position: 'absolute', 
          top: '10%', 
          right: 'calc(-40px - var(--push) * 1.3)', 
          textAlign: 'right',
          transition: 'right 0.05s linear'
        }}>
          <div style={{ borderBottom: '2px dashed #00e6ff', paddingBottom: '2px' }}>
            162 mm (With Flanges)
          </div>
          <div style={{ fontSize: '10px', color: '#aaa', marginTop: '2px' }}>
            142 mm (Body Only)
          </div>
        </div>
      </div>
    </Html>
  );
}

const FloatingBox = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, background: '#111' }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Canvas
        style={{ width: "100%", height: "100%", display: 'block' }}
        camera={{ position: [0, 2, 5], fov: 45 }}
      >
        <ambientLight intensity={0.5} />
        <Environment preset="warehouse" />
        
        <ProductModel />
        <DynamicLabels hovered={hovered} />

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
      
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        color: '#fff',
        fontSize: '10px',
        opacity: hovered ? 0.3 : 0.8,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none'
      }}>
        {hovered ? "← Drag to Rotate →" : "Hover to view dimensions"}
      </div>
    </div>
  );
};

export default FloatingBox;