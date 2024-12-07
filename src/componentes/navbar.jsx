
import { Link } from "react-router-dom";

import logo from "../imagenes/logo.png"
const Navbar = () => (
  <nav className="flex flex-row place-content-between p-6">
  <div className="flex flex-row gap-4 items-center">
    <img src={logo} width={50} />
    <h2 className="text-white text-4xl font-grace">Parchemos</h2>
  </div>

  {/* Botón de hamburguesa */}
  <div className="md:hidden flex items-center">
    <label htmlFor="menu-toggle" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </label>
    <input type="checkbox" id="menu-toggle" className="hidden peer" />

    {/* Menú desplegable (hamburguesa) */}
    <div className="hidden peer-checked:block w-full md:hidden">
      <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <li><Link to="/eventos" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Eventos</Link></li>
        <li><Link to="/categorias" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Categorias</Link></li>
        <li><Link to="/nosotros" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Nosotros</Link></li>
        <li><Link to="/clima" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">¿Hará un buen día?</Link></li>
      </ul>
    </div>
  </div>

  {/* Menú en escritorio */}
  <ul className="flex flex-row text-white gap-12 items-center text-base hidden md:flex">
    <li><Link to="/eventos">Eventos</Link></li>
    <li><Link to="/categorias">Categorias</Link></li>
    <li><Link to="/nosotros">Nosotros</Link></li>
    <li><Link to="/clima">¿Hará un buen día?</Link></li>
  </ul>

  {/* Menú de usuario en escritorio */}
  <ul className="flex flex-row text-white gap-8 items-center text-base hidden md:flex">
    <li>ES</li>
    <li><Link to="/ingreso">Ingresar</Link></li>
    <button className="hover:bg-[#439DFE] bg-[#5B6CFF] py-2 px-4 rounded-full text-white h-10 w-32 sm:w-40 md:w-48 lg:w-24">
      <Link to="/registro">Registro</Link>
    </button>
  </ul>
</nav>

);

export default Navbar;