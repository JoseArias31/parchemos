import React, { useState } from 'react';
import { addEvent } from './api';

const AddEvent = () => {
    const [form, setForm] = useState({ titulo: '', descripcion: '', fecha_inicio: '', hora_inicio: '', duracion: '', ubicacion: '', cupo_max: '', cupo_actual: '', estado: ''
});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addEvent(form);
        alert('Evento agregado!');
    };

    return (
        <form
            className="flex flex-col gap-4 w-[300px] mx-auto p-6 bg-white shadow-lg rounded-lg"
            onSubmit={handleSubmit}
        >
            <input
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="titulo"
                placeholder="Título"
                onChange={handleChange}
            />
            <input
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="descripcion"
                placeholder="Descripción"
                onChange={handleChange}
            />
            <input
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="fecha_inicio"
                placeholder="Fecha"
                type="date"
                onChange={handleChange}
            />
            <input
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="hora_inicio"
                placeholder="Hora"
                type="time"
                onChange={handleChange}
            />
            <input
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="duracion"
                placeholder="Duración"
                type="number"
                onChange={handleChange}
            />
            <input
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="ubicacion"
                placeholder="Ubicación"
                onChange={handleChange}
            />
            <input
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="cupo_max"
                placeholder="Cupo Máximo"
                type="number"
                onChange={handleChange}
            />
            <input
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="cupo_actual"
                placeholder="Cupo Actual"
                type="number"
                onChange={handleChange}
            />
            <input
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="estado"
                placeholder="Estado"
                onChange={handleChange}
            />
            <button
                className="mt-4 bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="submit"
            >
                Agregar Evento
            </button>
        </form>
    );
    };    

export default AddEvent;
