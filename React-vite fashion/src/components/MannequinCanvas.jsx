import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF, Html } from '@react-three/drei'
import { motion } from 'framer-motion'

function RotatingLight() {
  const ref = useRef()
  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.2
  })
  return (
    <group ref={ref}>
      <mesh position={[1.5, 2, 1]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial emissive={[1, 0.6, 0.7]} emissiveIntensity={2} />
      </mesh>
    </group>
  )
}

function MannequinModel({ fallback = true }) {
  // useGLTF will throw if file missing; we catch and render simple fallback geometry.
  try {
    const gltf = useGLTF('/models/mannequin.glb')
    return <primitive object={gltf.scene} scale={1.2} position={[0, -1, 0]} />
  } catch (e) {
    if (fallback) {
      return (
        <group>
          <mesh position={[0, -0.5, 0]}>
            <cylinderGeometry args={[0.5, 0.6, 1.8, 32]} />
            <meshStandardMaterial metalness={0.6} roughness={0.2} color={'#ececec'} />
          </mesh>
          <mesh position={[0, 1.1, 0]}>
            <sphereGeometry args={[0.45, 32, 32]} />
            <meshStandardMaterial metalness={0.3} roughness={0.5} color={'#f7f7f7'} />
          </mesh>
        </group>
      )
    }
    return null
  }
}

export default function MannequinCanvas() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      style={{ width: '100%', height: '100%' }}
    >
      <Canvas camera={{ position: [0, 0, 4], fov: 35 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <Suspense fallback={<Html>Loading 3D...</Html>}>
          <MannequinModel />
          <Environment preset="city" />
        </Suspense>
        <RotatingLight />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>
    </motion.div>
  )
}
