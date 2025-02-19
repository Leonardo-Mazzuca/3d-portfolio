import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import * as THREE from "three";

const HeroCamera = ({
  children,
  isMobile,
}: {
  children: React.ReactNode;
  isMobile: boolean;
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {

    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    if (!isMobile) {

        if(!groupRef.current) {
            return
        }

      easing.dampE(groupRef.current?.rotation, [-state.pointer.y/3,-state.pointer.x/5,0], 0.25, delta);
    }

  });

  return <group scale={isMobile ? 1 : 1.3} ref={groupRef}>{children}</group>;
};

export default HeroCamera;
