import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getEvents = async () => {
    const response = await axios.get(`${API_URL}/eventos`);
    return response.data;
};

export const addEvent = async (event) => {
    const response = await axios.post(`${API_URL}/eventos`, event);
    return response.data;
};
