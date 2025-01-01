import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {EventosData} from '../data/eventos'
import {Link} from "react-router-dom";



export const Categorias = () => {
  return (
    <div>
      <div className="text-center mt-40">
        <h1 className="text-7xl text-white">Categorías</h1>
        <p className="text-white opacity-50 text-lg mt-4">
          El sitio tiene un montón de actividades geniales:
        </p><p className="text-white opacity-50 text-lg ">
          Conciertos,
          deportes, arte, tecnología, comida y mucho más, ¡para que disfrutes y
          te diviertas con lo que más te guste!
        </p>
        <Link to={"/categorias"}><button className="bg-[#5B6CFF] hover:bg-[#439DFE] text-white font-bold py-2 px-4 rounded-full self-center mt-4 mb-20">
          Únete a un evento
        </button></Link>
      </div>
      <h2 className="text-white mb-6 ml-8 text-2xl">Descubre categorías</h2>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]} // Módulos Swiper
         
          slidesPerView={4} // Mostrar 4 slides al mismo tiempo
          navigation // Habilitar navegación
          pagination={{ clickable: true }} // Paginación clickeable
          loop={true} // Activar loop
          scrollbar={{ draggable: true }} // Hacer barra de desplazamiento interactiva
          spaceBetween={0} // Eliminar espacio entre slides
          autoplay={{
            delay: 3000, // El tiempo en milisegundos entre cada rotación (3000ms = 3 segundos)
            disableOnInteraction: false, // Si se desactiva cuando se interactúa, lo dejamos en false para que siga funcionando
          }}
        >
          {/* Slides con imágenes */}
          {EventosData.map((evento, index) => (
            <SwiperSlide
              key={index}
              style={{ textAlign: "-webkit-center" }}
              className="mb-10"
              >
              <Link to={evento.link}>
                <img
                  src={evento.src}
                  alt={evento.alt}
                  className=" w-[300px] h-[120px] h-auto rounded-full"
                  style={{width: "calc(80%)"}}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
