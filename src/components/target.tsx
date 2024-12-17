import {  useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";

const Target = ({ ...props }: MeshProps) => {


  const targetRef = useRef<THREE.Mesh>(null)

  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useGSAP(()=> {

    if(!targetRef.current){
        return
    }

    gsap.to(targetRef?.current?.position, {
        x: targetRef.current?.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true
    })

  },[])


  return (

    <mesh scale={1.5} ref={targetRef} rotation={[0,Math.PI/5,0]} {...props}>

        <primitive 
            object={scene}
        />

    </mesh>

  );
};

export default Target;
