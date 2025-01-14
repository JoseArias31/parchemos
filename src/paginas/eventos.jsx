import React, { useEffect, useState } from 'react';
import { getEvents } from './api';

const Eventos = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const data = await getEvents();
            setEvents(data);
        };
        fetchEvents();
    }, []);

    return (
        <div className='mb-20'>
            <h1 className="m-4 md:m-8 lg:m-20 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
  Eventos cerca de ti
</h1>

            <ul className="space-y-8 max-w-3xl mx-auto px-4">
        {events.map(event => (
          <li
            key={event.evento_id}
            className="bg-black shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Event Image */}
              <div className="md:col-span-1">
                <img
                  src={`https://picsum.photos/300/200?random=${event.evento_id}`}
                  alt={event.titulo}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Event Details */}
              <div className="md:col-span-2 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-white text-2xl font-semibold mb-2">{event.titulo}</h2>
                  <p className="text-gray-400 mb-4">{event.descripcion}</p>
                  <div className="text-sm text-gray-700 grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-white">
                    <p><span className="font-medium">Fecha:</span> {event.fecha_inicio}</p>
                    <p><span className="font-medium">Hora:</span> {event.hora_inicio}</p>
                    <p><span className="font-medium">Duracion:</span> {event.duracion} minutes</p>
                    <p><span className="font-medium">Ubicacion:</span> {event.ubicacion}</p>
                    <p><span className="font-medium">Capacidad Max:</span> {event.cupo_max}</p>
                    <p><span className="font-medium">Capacidad Actual:</span> {event.cupo_actual}</p>
                    <p><span className="font-medium">Estado:</span> {event.estado}</p>
                    <p><span className="font-medium">Creado en:</span> {new Date(event.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex justify-end space-x-4">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
                    View Details
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}

            </ul>
        </div>
    );
};

export default Eventos;
