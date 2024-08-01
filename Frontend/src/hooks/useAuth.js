// src/hooks/useAuth.js
import { useEffect, useState } from 'react';
import authService from '../services/authService';

const useAuth = async () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    await useEffect(() => {
        const user = authService.getCurrentUser();
        if (user) {
            setIsAuthenticated(true);
        }
    }, []);
    return isAuthenticated;
};

export default useAuth;
