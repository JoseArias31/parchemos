
import logo from "../imagenes/logoP.png";

export const HeroSection = () => {
  return (
    <>
   
    <div className="flex flex-col md:flex-row items-center w-full justify-center mt-20 mb-20 gap-44">
      <div className="flex flex-col items-center">
        <h1 className="text-[#439DFE] text-8xl font-bold">Conecta con</h1>
        <h1 className="text-[#439DFE] text-8xl font-bold">tu comunidad</h1>
        <button className="bg-[#5B6CFF] hover:bg-[#439DFE] text-white font-bold py-2 px-4 rounded-full self-center mt-4 mb-20">¡Únete a la APP!</button>
        <h2 className="text-white font-bold text-5xl">Cientos de eventos de</h2>
        <h2 className="text-white font-bold text-5xl">confianza para <span className="font-grace">Parchar</span></h2>
      </div>
      <div>
        <img
        src={logo}
        width={400}
        
        >
          
        </img>
      </div>
    </div>
    
    </>
  );
};
