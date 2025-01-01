import Navbar from '../componentes/navbar';
import EventoCarrusel from '../componentes/eventosCarrusel'
import Whatsapp from '../componentes/whatsApp';
import Reseña from '../componentes/reseña';
import Footer from '../componentes/footer';
import { HeroSection } from '../componentes/heroSection';
import { BuscarParche } from '../componentes/buscarParche';
Footer
const Homepage = () =>  {
  return (
<>  
      <Navbar />
      <HeroSection />
      <EventoCarrusel />
      <BuscarParche />
      <Whatsapp />
      <Reseña />
<Footer />
    </>
  )
}

export default Homepage;

