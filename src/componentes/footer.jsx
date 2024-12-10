import { Link } from "react-router-dom";
import android from '../imagenes/android.png'
import iOS from '../imagenes/iOS.png'
const Footer = () => {
  const menuItems = [
    { name: "Eventos", path: "/eventos" },
    { name: "Categorías", path: "/categorias" },
    { name: "Calendario", path: "/clima" },
    { name: "Testimonios", path: "/testimonios" },
    { name: "Acerca de Nosotros", path: "/nosotros" },
  ];

  const menuItems2 = [
    { name: "Unete", path: "/registro" },
    { name: "Trabaja con Nosotros", path: "/trabajo" },
    { name: "Ayuda", path: "/ayuda" },
    { name: "Politicas de Privacidad", path: "/politicas-de-privacidad" },
    { name: "Términos y Condiciones", path: "/terminos-y-condiciones" },
  ];


return(
  
<div className="flex flex-row mb-4 text-white"style={{ textAlign: "-webkit-center" }}>
<div className="w-1/4 h-12 flex flex-col justify-between gap-10">
  <h1 className="text-xl font-bold">PARCHEMOS.COM</h1>
  <h2>©Todos los derechos reservados 2024 Parchemos</h2>
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
    <img
    src={android}
    width={30}
    ></img>
    <img
    src={iOS}
    width={30}
    ></img>
    </div>
  </div>

</div>



)
}
export default Footer;