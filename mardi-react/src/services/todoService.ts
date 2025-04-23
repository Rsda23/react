import axios from 'axios';
import { Todo } from '../types/todo';


const API_URL = 'http://localhost:3001/todos';

export const fetchTodos = () => axios.get(API_URL);

export const createTodo = (newTodo: Omit<Todo, '_id'>) =>
    axios.post(API_URL, newTodo);

export const deleteTodo = (_id: string) => axios.delete(`${API_URL}/${_id}`);