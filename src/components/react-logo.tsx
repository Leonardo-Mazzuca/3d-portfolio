

import { Float, useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'

 function ReactLogo(props: GroupProps) {
  const { nodes, materials } = useGLTF('/models/react.glb') as any

  return (

    <Float floatIntensity={1}>

      <group  dispose={null} {...props} scale={0.7}>

        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39,0.39,0.5]}
        />

      </group>

    </Float>

  )
  
}

useGLTF.preload('/models/react.glb')

export default ReactLogo



