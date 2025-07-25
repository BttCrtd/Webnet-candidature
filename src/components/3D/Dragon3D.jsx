import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

const Dragon3D = () => {
  const meshRef = useRef()

  return (
    <Canvas
      style={{ height: '400px', width: '100%' }}
      camera={{ position: [10, 7, 11], fov: 50 }}
    >
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 0, 5]} />
      <directionalLight position={[5, 0, 5]} />
      <directionalLight position={[-5, 0, 5]} />

      <mesh ref={meshRef} rotation={[0, 0, 0]}>
        <boxGeometry args={[4, 1, 4]} />
        <meshStandardMaterial color="#111111" roughness={0.5} metalness={0.4} />
      </mesh>

      <mesh ref={meshRef} rotation={[0, 0, 0]} position={[0, 2, 0]}>
        <boxGeometry args={[4, 1, 4]} />
        <meshStandardMaterial color="#111111" roughness={0.5} metalness={0.4} />
      </mesh>

      <mesh ref={meshRef} rotation={[0, 0, 0]} position={[0, 2, -4]}>
        <boxGeometry args={[4, 5, 4]} />
        <meshStandardMaterial color="#111111" roughness={0.5} metalness={0.4} />
      </mesh>

      <mesh ref={meshRef} rotation={[0, 0, 0]} position={[1, 2.5, 1]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#111111" roughness={0.5} metalness={0.4} />
      </mesh>

      <mesh ref={meshRef} rotation={[0, 0, 0]} position={[1, 2.7, 1]}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="red" roughness={0.5} metalness={0.4} />
      </mesh>

      <mesh ref={meshRef} rotation={[0, 0, 0]} position={[-1, 2.5, 1]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#111111" roughness={0.5} metalness={0.4} />
      </mesh>

      <mesh ref={meshRef} rotation={[0, 0, 0]} position={[-1, 2.7, 1]}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="red" roughness={0.5} metalness={0.4} />
      </mesh>

      {/****************Yeux***********************/}
      <mesh ref={meshRef} rotation={[0, 0, 0]} position={[-1, 3.6, -2.1]}>
        <boxGeometry args={[0.8, 0.4, 0.4]} />
        <meshStandardMaterial color="red" roughness={0.5} metalness={0.4} />
      </mesh>

      <mesh ref={meshRef} rotation={[0, 0, 0]} position={[-0.5, 3.5, -2]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial color="red" roughness={0.5} metalness={0.4} />
      </mesh>

      <mesh ref={meshRef} rotation={[0, 0, 0]} position={[1, 3.6, -2.1]}>
        <boxGeometry args={[0.8, 0.4, 0.4]} />
        <meshStandardMaterial color="red" roughness={0.5} metalness={0.4} />
      </mesh>

      <mesh ref={meshRef} rotation={[0, 0, 0]} position={[0.5, 3.5, -2]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial color="red" roughness={0.5} metalness={0.4} />
      </mesh>

      {/******Langue ************/}
      <mesh ref={meshRef} rotation={[0, 0, 0]} position={[0, 0.1, -1.5]}>
        <boxGeometry args={[3, 1, 4]} />
        <meshStandardMaterial color="red" roughness={0.5} metalness={0.4} />
      </mesh>

      <mesh ref={meshRef} rotation={[0, 0, 0]} position={[0, 0.1, -1]}>
        <boxGeometry args={[2, 1, 4]} />
        <meshStandardMaterial color="red" roughness={0.5} metalness={0.4} />
      </mesh>

      <mesh ref={meshRef} rotation={[0, 0, 0]} position={[0, 0.1, -0.5]}>
        <boxGeometry args={[1, 1, 4]} />
        <meshStandardMaterial color="red" roughness={0.5} metalness={0.4} />
      </mesh>

      {/***********Cornes ****************/}
      <mesh ref={meshRef} rotation={[0, 0, 0]} position={[-1, 4.5, -3]}>
        <boxGeometry args={[0.8, 1, 0.4]} />
        <meshStandardMaterial color="red" roughness={0.5} metalness={0.4} />
      </mesh>

      <mesh ref={meshRef} rotation={[0.2, 0, 0]} position={[-1, 5, -3.8]}>
        <boxGeometry args={[0.8, 0.4, 2]} />
        <meshStandardMaterial color="red" roughness={0.5} metalness={0.4} />
      </mesh>

      <mesh
        ref={meshRef}
        rotation={[0.35, 0.3, 0]}
        position={[-1.5, 5.2, -4.4]}
      >
        <boxGeometry args={[0.8, 0.4, 1.6]} />
        <meshStandardMaterial color="red" roughness={0.5} metalness={0.4} />
      </mesh>

      <mesh ref={meshRef} rotation={[0, 0, 0]} position={[1, 4.5, -3]}>
        <boxGeometry args={[0.8, 1, 0.4]} />
        <meshStandardMaterial color="red" roughness={0.5} metalness={0.4} />
      </mesh>

      <mesh ref={meshRef} rotation={[0.2, 0, 0]} position={[1, 5, -3.8]}>
        <boxGeometry args={[0.8, 0.4, 2]} />
        <meshStandardMaterial color="red" roughness={0.5} metalness={0.4} />
      </mesh>

      <mesh
        ref={meshRef}
        rotation={[0.35, -0.3, 0]}
        position={[1.5, 5.2, -4.4]}
      >
        <boxGeometry args={[0.8, 0.4, 1.6]} />
        <meshStandardMaterial color="red" roughness={0.5} metalness={0.4} />
      </mesh>

      <OrbitControls />
    </Canvas>
  )
}

export default Dragon3D
