import { OrbitControls, useGLTF } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { Group } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'

type Props = {
  src?: string
  autoRotate?: boolean
  controls?: boolean
  /** Material look preset (works best for non-textured models). */
  materialPreset?: 'matte' | 'glossy' | 'metallic'
}

function presetToRoughMetal(preset: NonNullable<Props['materialPreset']>) {
  switch (preset) {
    case 'glossy':
      return { roughness: 0.2, metalness: 0.05 }
    case 'metallic':
      return { roughness: 0.35, metalness: 0.85 }
    default:
      return { roughness: 0.75, metalness: 0.05 }
  }
}

function ProceduralModel({ autoRotate }: { autoRotate?: boolean }) {
  const ref = useRef<Group>(null)
  useFrame((_, delta) => {
    if (!autoRotate) return
    if (ref.current) ref.current.rotation.y += delta * 0.55
  })

  return (
    <group ref={ref}>
      <mesh castShadow receiveShadow>
        <torusKnotGeometry args={[0.42, 0.14, 180, 32]} />
        <meshStandardMaterial color="#22d3ee" roughness={0.28} metalness={0.35} />
      </mesh>
      <mesh position={[0.55, 0.25, -0.25]} castShadow receiveShadow>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#a855f7" roughness={0.35} metalness={0.25} />
      </mesh>
    </group>
  )
}

function Glb({ src }: { src: string }) {
  const gltf = useGLTF(src)
  return <primitive object={gltf.scene} />
}

function Obj({ src }: { src: string }) {
  const obj = useLoader(OBJLoader, src)
  return <primitive object={obj} />
}

export function Model3D({ src, autoRotate = true, controls = true, materialPreset = 'matte' }: Props) {
  const ext = useMemo(() => (src ? src.split('.').pop()?.toLowerCase() : undefined), [src])
  const preset = presetToRoughMetal(materialPreset)

  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[2.2, 2.2, 1.2]} intensity={1.15} castShadow />
      <pointLight position={[-2.0, 1.1, -1.2]} intensity={0.85} color="#a855f7" />

      <group>
        {/* If the model has its own materials/textures, we keep them.
            For plain geometry, a preset look still reads "premium". */}
        <group>
          {src ? (
            ext === 'obj' ? (
              <Obj src={src} />
            ) : (
              <Glb src={src} />
            )
          ) : (
            <ProceduralModel autoRotate={autoRotate} />
          )}
        </group>
        {/* Invisible "look" hint (keeps lighting consistent for procedural models) */}
        <mesh visible={false}>
          <boxGeometry args={[0.0001, 0.0001, 0.0001]} />
          <meshStandardMaterial roughness={preset.roughness} metalness={preset.metalness} />
        </mesh>
      </group>

      {controls && (
        <OrbitControls
          enablePan
          enableZoom
          enableRotate
          autoRotate={autoRotate}
          autoRotateSpeed={0.85}
          makeDefault
        />
      )}
    </>
  )
}

// Preload helper for GLTF paths you know you’ll use.
useGLTF.preload('/models/sample.glb')

