import React from "react";
import Lottie from "react-lottie";
import buildingAnimation from "../assets/Animation.json";
import '../styles/backgroundPages.css'

const Welcome = ({ username }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: buildingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="background-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
        <div className="shape shape5"></div>
        <div className="shape shape6"></div>
        <div className="shape shape7"></div>
        <div className="shape shape8"></div>
      </div>
      <div className="flex-grow flex md:w-4/5">
        <div className="w-1/2 p-8 flex flex-col justify-center items-start">
          <div className="flex items-end gap-4 mb-4">
            <h1 className="text-4xl font-bold text-indigo-600">
              ¡Bienvenido, {username}Jhampier!
            </h1>
          </div>

          <p className="text-lg mb-8">
            Gracias por unirte a nuestra aplicación de gestión de incidentes.
            Juntos, hagamos de nuestro condominio un lugar seguro y bien
            mantenido.
          </p>
        </div>

        <div className="w-1/2 p-8 flex items-center justify-center">
          <Lottie options={defaultOptions} height={300} width={400} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
