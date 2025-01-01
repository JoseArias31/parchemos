import { Link } from "react-router-dom";

export const Contactanos = () => {
  return (
    <div className="text-center mt-20 mb-20">
      <h1 className="text-white text-7xl mb-6">Contactanos</h1>

      <p className="text-white">
        ¿Tienes alguna duda, sugerencia o simplemente quieres ponerte en
        contacto con nosotros?{" "}
      </p>
      <p className="text-white">
        ¡Escríbenos! Si te gustaría agregar un evento, ser parte de nuestra
        comunidad o ayudarnos a hacer todo aún mejor,
      </p>
      <p className="text-white">
        ¡también estamos super abiertos a tus ideas! Estamos aquí para que
        tengas la mejor experiencia. ¡Nos encantaría recibir tu mensaje!
      </p>
      <Link to={"/contactanos"}>
        <button className="bg-[#5B6CFF] hover:bg-[#439DFE] text-white font-bold py-2 px-4 rounded-full self-center mt-4 mb-20 mt-8">
          Escribenos
        </button>
      </Link>
    </div>
  );
};
