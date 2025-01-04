import { Link } from "react-router-dom";
import android from '../imagenes/android.png'
import iOS from '../imagenes/iOS.png'
const Footer = () => {
 
  const currentYear = new Date().getFullYear(); // Obtiene el año actual
 
  const menuItems = [
    { name: "Eventos", path: "/eventos" },
    { name: "Categorías", path: "/categorias" },
    { name: "Calendario", path: "/clima" },
    { name: "Testimonios", path: "/testimonios" },
    { name: "Acerca de Nosotros", path: "/nosotros" },
  ];

  const menuItems2 = [
    { name: "Únete", path: "/registro" },
    { name: "Trabaja con Nosotros", path: "/trabajo" },
    { name: "Ayuda", path: "/ayuda" },
    { name: "Politicas de Privacidad", path: "/politicas-de-privacidad" },
    { name: "Términos y Condiciones", path: "/terminos-y-condiciones" },
  ];


return(
  
<div className="flex flex-row mb-4 text-white"style={{ textAlign: "-webkit-center" }}>
<div className="w-1/4 h-12 flex flex-col justify-between gap-10">
  <h1 className="text-xl font-bold">PARCHEMOS.COM</h1>
  <h2>©Todos los derechos reservados {currentYear} Parchemos</h2>
</div>
  <div className="w-1/4 h-12 space-y-2">
<h1 className="font-bold">EXPERIENCIAS</h1>
<ul className="space-y-4">
  {menuItems.map((item, index) => (
    <li key={index}>
      <Link to={item.path}>{item.name}</Link>
    </li>
  ))}
</ul>

  </div>
  <div className="w-1/4 h-12 space-y-2">
  <h1 className="font-bold ">SOPORTE</h1>
<ul className="space-y-4" >
  {menuItems2.map((item2, index)=>(
    <li key={index}>
<Link to={item2.path}>{item2.name}</Link>
    </li>
  ))}
</ul>
  </div>
  <div className="w-1/4 h-12 space-y-2">
    <h1 className="font-bold">APP MOVIL</h1>
    <div className="flex flex-row gap-4 justify-center">
    <a href="https://play.google.com/store/apps/details?id=com.instagram.android" target="blank"><img
    src={android}
    width={30}
    ></img></a>
     <a href="https://apps.apple.com/us/app/instagram/id389801252" target="blank"><img
    src={iOS}
    width={30}
    ></img></a>
    </div>
  </div>

</div>



)
}
export default Footer;