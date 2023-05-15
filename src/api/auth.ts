import { client } from '../utils/fetchClient';

export const register = async (username: string, email: string, password: string) => {
  return client.post('/registration', {
    username,
    email,
    password
  });
};

export const activate = async (token: string) => {
  return client.get(`/activation/${token}`);
};

export const login = async (username: string, password: string) => {
  return client.post('/login', {
    username,
    password
  });
};
