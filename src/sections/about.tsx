import Globe from "react-globe.gl";
import Button from "../components/button";
import { useState } from "react";

const About = () => {

    const [hasCopied, setHasCopied] = useState(false)
  const handleCopy = () => {

    navigator.clipboard.writeText("mazzuca2110@gmail.com");

    setHasCopied(true)

    setTimeout(()=> {
        setHasCopied(false)
    },2000)

  };

  return (
    <section id="about" className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Olá! Eu sou o Leonardo Mazzuca!</p>
              <p className="grid-subtext">
                Sou um desenvolvedor com mais de 3 anos de experiência. Especializado em JavaScript,
                e seus ecossistemas.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
          <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Minhas habilidades</p>
              <p className="grid-subtext">
               Eu sou especializado em JavaScript & TypeScript trabalhando especificamente
               com React & Next.js no front-end e Node & Nest.js no back-end.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                //@ts-ignore
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: "I'm here!",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                Eu posso trabalhar remotamente!
              </p>
              <p className="grid-subtext">
                Atualmente eu vivo no Brasil, mas hoje em dia isso não é um problema mais! Eu posso trabalhar remotamente.
              </p>
              <Button name="Entre em contato" isBeam className="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
          <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Minha paixão por programação!</p>
              <p className="grid-subtext">
                Eu sempre gosto de criar soluções e sistemas utilizando código. Carrego comigo
                o pressuposto de que sempre ha uma saída para qualquer tipo de problema!
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
          <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[226px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Me mande um e-mail!</p>
              <div onClick={handleCopy} className="copy-container">
                <img 
                    src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                    alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                    mazzuca2110@gmail.com 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
