import React, { useState } from 'react';
import { addEvent } from './api';

const AddEvent = () => {
    const [form, setForm] = useState({ title: '', description: '', date: '', location: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addEvent(form);
        alert('Evento agregado!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Título" onChange={handleChange} />
            <input name="description" placeholder="Descripción" onChange={handleChange} />
            <input name="date" placeholder="Fecha" onChange={handleChange} />
            <input name="location" placeholder="Ubicación" onChange={handleChange} />
            <button type="submit">Agregar Evento</button>
        </form>
    );
};

export default AddEvent;
