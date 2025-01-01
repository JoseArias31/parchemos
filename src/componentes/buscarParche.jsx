import { useState } from "react";
import lupa from "../imagenes/lupaNB.png";

export const BuscarParche = () => {
  const [search, setSearch] = useState("");
  const [foundActivity, setFoundActivity] = useState(null);
  const actividades = [
    "Conciertos",
    "Festivales",
    "Teatro",
    "Cine",
    "Juegos_de_mesa",
    "Esports",
    "Stand-up_comedy",
    "Fútbol",
    "Baloncesto",
    "Tenis",
    "Yoga",
    "Fitness",
    "Deportes_extremos",
    "Senderismo",
    "Ciclismo",
    "Exposiciones_de_arte",
    "Talleres_creativos",
    "Conferencias",
    "Cursos",
    "Literatura",
    "Música_en_vivo",
    "Voluntariado",
    "Intercambio_de_idiomas",
    "Grupos_de_lectura",
    "Clubes_de_hobbies",
    "Redes_de_networking",
    "Meetups_de_programación",
    "Conferencias_tecnológicas",
    "Hackathons",
    "Workshops_de_desarrollo",
    "Catas_de_vino",
    "Cenas_temáticas",
    "Cocinar_juntos",
    "Mercados_de_agricultores",
    "Eventos_religiosos",
    "Ferias_y_mercados",
    "Fiestas_temáticas",
    "Citas",
    "Viajes_en_grupo"
  ];
  

    // Función para normalizar texto eliminando tildes
    const normalize = text => 
    text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const handleSearch = () => {
    // Verifica si el usuario no ingresó nada
    if (search.trim() === "") {
      console.log("Por favor, ingresa una palabra válida.");
      return;
    }
setSearch("");
    // Tokenizar el texto del usuario (dividir en palabras)
    const palabras = normalize(search).split(/\s+/);

    // Buscar actividad en base a las palabras del usuario
    const actividadEncontrada = actividades.find(activity =>
      palabras.some(palabra => normalize(activity).includes(palabra))
    );

    if (actividadEncontrada) {
      console.log("Actividad encontrada:", actividadEncontrada);
      const formattedSearch = normalize(actividadEncontrada).replace(/\s+/g, "-");
      window.open("/" + formattedSearch, "_blank"); // Abrir nueva página
    } else {
      console.log("Actividad no encontrada.");
    }

    if (actividadEncontrada) {
      setFoundActivity(actividadEncontrada);
    } else {
      setFoundActivity(null);
    }
  };
  return (
    <div>
    <div className="flex flex-row justify-center gap-10 mt-40">
      <h2 className="text-white text-4xl">¿Dónde quieres parchar?</h2>
      <div className="relative flex flex-row gap-2">
        <img
          src={lupa}
          alt="Ícono"
          class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
        <input
          className="pl-10 h-10 text-white rounded-full bg-[#141414] border-2 border-[#439DFE] w-[300px]"
          type="text"
          placeholder="Quiero jugar futbol..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch(); // Search when pressing Enter
          }}
        />
        <button
          className="h-10 w-10 bg-[#439DFE] rounded-full text-white hover:bg-[#2F75EE]" 
          onClick={handleSearch}>Ir</button>
      </div>
  
    </div>
    <div className="justify-self-center mt-2">
      {/* Muestra el resultado si se encuentra una actividad */}
      {foundActivity === null ? (
        <p className="text-white ">Actividad no encontrada, intenta de nuevo</p>
      ) : (
        console.log("")
      )}
      </div>
    </div>
  );
};
