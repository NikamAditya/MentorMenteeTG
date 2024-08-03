// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001';

const register = (email, password) => {
    return axios.post(`${API_URL}/register`, { email, password });
};

const login = (email, password) => {
    return axios.post(`${API_URL}/login`, { email, password })
        .then(response => {
            const { token, user } = response.data;
            const { uid, type } = user[0];
            if (token) {   
                localStorage.setItem("token", JSON.stringify(token));
                localStorage.setItem("user", JSON.stringify({ uid, type }));
            }
            // console.log({ uid, type });
            return { uid, type };
        });
};

const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
};

const getCurrentUser = () => {
    try {
        return JSON.parse(localStorage.getItem('token'));
    } catch (error) {
        console.error('Error parsing token:', error);
        return null;
    }
};


export default {
    register,
    login,
    logout,
    getCurrentUser
};
