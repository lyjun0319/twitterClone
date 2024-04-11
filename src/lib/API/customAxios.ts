import axios, { AxiosInstance } from 'axios';

export const SERVER_URL: string = 'http://localhost:3009';
export const customAxios: AxiosInstance = axios.create({
  baseURL: `${SERVER_URL}`,
  headers: {
    //공통 헤더
  },
});
