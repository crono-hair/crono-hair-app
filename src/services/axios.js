import axios from 'axios';
import { BACKEND_BASE_URL } from '../config/api';

const JSON_HEADERS = {
  'Content-Type': 'application/json',
};

export const instance = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: JSON_HEADERS,
});
