import { Link } from "react-router-dom";
import reseña from "../imagenes/reseña.png"


const Reseña = () => {
    return(
    <div className="flex flex-row place-content-evenly mt-60 mb-60">
    
    <img
    src={reseña}
    width={500}
    className="rounded-lg"
    ></img>
    <div className="text-white flex flex-col w-[30%] gap-8 justify-center ">
    <h1 className="text-4xl font-bold">¿Qué es Parchemos App?</h1>
    <h2 className="font-semibold">Parchemos App conecta personas en Bogotá a través de eventos y actividades basados en intereses compartidos. Fácil de usar, fomenta comunidades y encuentros significativos.</h2>
<h2>En Parchemos App, puedes ser un host creando eventos o un participante uniéndote a actividades que van desde deportes, música y arte, hasta torneos de videojuegos, voluntariados y charlas tech. Nuestro objetivo es fomentar conexiones significativas, enriquecer la vida social y facilitar un espacio donde todos puedan disfrutar y crecer, ¡todo mientras parcheamos juntos!</h2>
<button class="bg-[#439DFE] hover:bg-[#5B6CFF] text-white font-bold py-2 px-4 rounded-full w-[120px]">
<Link to="/eventos">Saber más</Link>
</button>  
    </div>
    
    </div>
)}

export default Reseña;