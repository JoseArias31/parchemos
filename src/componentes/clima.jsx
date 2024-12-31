import { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [ninjaComments, setNinjaComments] = useState("");
  const [city, setCity] = useState("Bogota");

  const API_KEY = "b4e5fc9516e58c30e72ddfa93318c50b";

  // Fetch del clima
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        const temp = response.data.main.temp;
        setWeather(temp);
        generateNinjaComments(temp); // Actualiza los comentarios ninja
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, [city]); // Se actualiza cada vez que la ciudad cambie

  // Función para generar los comentarios según la temperatura
  const generateNinjaComments = (temp) => {
    if (temp > 25) {
      setNinjaComments(`☀️ En ${city} a ${temp}°C, ¡un día caluroso! ¿Qué tal jugar fútbol con amigos o ir a Monserrate temprano?`);
    } else if (temp > 18) {
      setNinjaComments(`🌤️ En ${city} a ${temp}°C, un día perfecto para recorrer la Ciclovía o pasear por el Parque Simón Bolívar.`);
    } else if (temp > 1) {
      setNinjaComments(`🌥️ En ${city} a ${temp}°C, fresco y cómodo. Podrías visitar Usaquén y disfrutar de sus mercados o un picnic en el Jardín Botánico.`);
    } else if (temp > 7) {
      setNinjaComments(`🌧️ En ${city} a ${temp}°C, algo frío, ideal para visitar un café en La Candelaria o explorar museos como el Museo del Oro.`);
    } else {
      setNinjaComments(`❄️ En ${city} a ${temp}°C, frío intenso. Aprovecha para disfrutar de una changua caliente en casa o jugar juegos de mesa con amigos.`);
    }
  };
  

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
     

      {/* Mostrar los resultados */}
      {weather !== null ? (
        <>
          
          <p className="text-white">{ninjaComments}</p>
        </>
      ) : (
        <p>Loading Weather data...</p>
      )}
    </div>
  );
};

export default Weather;
