
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Here you can import any page
import HomePage from '../src/paginas/homepage.jsx'
import Eventos from '../src/paginas/eventos.jsx'
import AddEvento from '../src/paginas/addEvento.jsx'
// import Contact from '../src/paginas/contacto.jsx'
import Footer from '../src/componentes/footer.jsx'
import NavBar from '../src/componentes/navbar.jsx'



function App() {


  return (
   
   //Any extra page you guys want to add, just use the Router-Router-Route Components. 
   <Router>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />    
        <Route path="/eventos" element={<Eventos />} />    
        <Route path="/addEvento" element={<AddEvento />} />    
        {/* <Route path="/contactos" element={<Contacto />} />        */}
      </Routes>
     <Footer />
    </Router>
    
  )
}

export default App
