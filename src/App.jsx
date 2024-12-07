
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Here you can import any page
import HomePage from '../src/paginas/homepage.jsx'
// import Contact from '../src/paginas/contacto.jsx'




function App() {


  return (
   
   //Any extra page you guys want to add, just use the Router-Router-Route Components. 
   <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />    
        {/* <Route path="/contactos" element={<Contacto />} />        */}
      </Routes>
    </Router>
  )
}

export default App
