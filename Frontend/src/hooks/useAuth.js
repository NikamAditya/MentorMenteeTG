// src/hooks/useAuth.js
import { useEffect, useState } from 'react';
import authService from '../services/authService';

const useAuth = async () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = () => {
            const user = authService.getCurrentUser();
            if(user){
                // console.log(user);
                setIsAuthenticated(true);
            }
        };

        checkAuthentication();
    }, []); // Empty dependency array ensures this runs only once on mount

    return isAuthenticated;
};

export default useAuth;
