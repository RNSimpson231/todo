import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getTodos = () => axios.get(BASE_URL);
export const createTodo = (data) => axios.post(BASE_URL, data);
export const updateTodo = (id, data) => axios.patch(`${BASE_URL}/${id}`, data);
export const deleteTodo = (id) => axios.delete(`${BASE_URL}/${id}`);
