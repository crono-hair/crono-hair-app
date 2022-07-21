import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';
import { BACKEND_BASE_URL } from '../config/api';

const JSON_HEADERS: AxiosRequestHeaders = {
  'Content-Type': 'application/json',
};

export const instance: AxiosInstance = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: JSON_HEADERS,
});
