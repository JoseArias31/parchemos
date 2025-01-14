// Importar módulos necesarios de Swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Weather from "./clima";

import {EventosData} from '../data/eventos'

// Importar estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {Link} from "react-router-dom";

const ImageCarousel = () => {
  return (
    <div className="mb-20 ">
      <div className="flex flex-row items-center place-content-between pr-10">
    <h2 className="text-white text-2xl m-4">Top Eventos</h2>
    <Weather />
    </div>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]} // Módulos Swiper
      spaceBetween={20} // Espacio entre slides
      slidesPerView={4} // Mostrar 4 slides al mismo tiempo
      navigation // Habilitar navegación
      pagination={{ clickable: true }} // Paginación clickeable
      loop={true} // Activar loop
      scrollbar={{ draggable: true }} // Hacer barra de desplazamiento interactiva
    >
      {/* Slides con imágenes */}
      {EventosData.map((evento,index)=>(
      <SwiperSlide key={index} style={{ textAlign: "-webkit-center" }} className="mb-10" >
       <Link to={evento.link}><img
          src={evento.src}
          alt={evento.alt}
          className="w-[200px] h-[200px] h-auto rounded-lg"
          
        /></Link>
        <div className="flex flex-row w-[300px] gap-4">
        <div className="text-white bg-gradient-to-r from-[#439DFE] to-[#F687FF] w-[50px] h-[50px] text-center content-center rounded-[25%] mb-5 font-bold">
        <h2>{evento.mes}</h2>
        <h2>{evento.dia}</h2>
        </div>
        <div className="text-white " style={{ textAlign: "-webkit-left" }}>
        <h3>Evento</h3>
        <h2 className="text-2xl">{evento.eventoNombre}</h2>
        <h3>Hora: {evento.hora} {evento.meridiano}</h3>
        </div>
        </div>
        <div className="mt-6">
        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm  me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-20 h-8 "><Link to={evento.link}>Info</Link></button>
        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-40 h-8 cursor-default pointer-events-none w-28">Participantes: {evento.participantes}</button>




        </div>
      </SwiperSlide>
))}
    </Swiper>
    </div>
  );
};

export default ImageCarousel;
