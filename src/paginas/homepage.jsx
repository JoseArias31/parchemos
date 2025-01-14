// import Navbar from '../componentes/navbar';
import EventoCarrusel from '../componentes/eventosCarrusel'
import Whatsapp from '../componentes/whatsApp';
import Reseña from '../componentes/reseña';
// import Footer from '../componentes/footer';
import { HeroSection } from '../componentes/heroSection';
import { BuscarParche } from '../componentes/buscarParche';
import { Categorias } from '../componentes/categorias';
import { Contactanos } from '../componentes/contactanos';

const Homepage = () =>  {
  return (
<>  
      {/* <Navbar /> */}
      <HeroSection />
      <EventoCarrusel />
      <BuscarParche />
      <Categorias />
      <Whatsapp />
      <Reseña />
      <Contactanos />
{/* <Footer /> */}
    </>
  )
}

export default Homepage;

