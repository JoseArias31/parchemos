import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from "../imagenes/logo.png"

export default function Whatsapp() {

  return (
      <FloatingWhatsApp 
        phoneNumber="16474252986"
        accountName="Parchemos"
        statusMessage="¡Hola! ¿Qué parche tienes planeado para hoy? "
        chatMessage="¿Cómo te podemos asistir? "
        placeholder="Escribe tu mensaje aquí..."
        allowClickAway="true"
        allowEsc="true"
        avatar={logo}        
     />
  )
}