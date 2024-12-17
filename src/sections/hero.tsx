import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/hacker-room";
import { Suspense } from "react";
import CanvasLoader from "../components/canvas-loader";
import { Leva } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/target";
import ReactLogo from "../components/react-logo";
import Cube from "../components/cube";
import Rings from "../components/ring";
import HeroCamera from "../components/hero-camera";
import Button from "../components/button";

const Hero = () => {


  const isMobile = useMediaQuery({
    maxWidth: 786
  })

  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1024
  })

  const isSmall = useMediaQuery({
    maxWidth: 440
  })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <section id="home" className="min-h-screen w-full flex flex-col relative" >

        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Olá, eu sou o Mazzuca <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Desenvolvedor Fullstack</p>
      </div>

      <div className="w-full h-full absolute inset-0">

      <Leva hidden/>
      
      <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
   
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            <HeroCamera isMobile={isMobile}>
                <HackerRoom 
                  
                  position={sizes.deskPosition}
                  rotation={[0, -Math.PI, 0]} 
                  scale={sizes.deskScale}  
            
                />
            </HeroCamera>

              <group>
                <Target
                  //@ts-ignore
                  position={sizes.targetPosition}

                />
                <ReactLogo
                  //@ts-ignore
                  position={sizes.reactLogoPosition}
                 />

                 <Cube 
                  //@ts-ignore
                  position={sizes.cubePosition}
                 />
                 <Rings 
                  //@ts-ignore
                  position={sizes.ringPosition}
                 />
              </group>
      

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>

      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a className="w-fit" href="#about">
        <Button 
          name="Vamos trabalhar juntos?"  
          isBeam
          className="sm:w-fit w-full sm:min-w-96"
        />
        </a>
      </div>

    </section>
  );
};

export default Hero;
