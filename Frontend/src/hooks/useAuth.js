// // src/hooks/useAuth.js
// import { useEffect, useState } from 'react';
// import authService from '../services/authService';

// const useAuth = () => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
    
//     useEffect(() => {
//         const checkAuthentication = () => {
//             const user = authService.getCurrentUser();
//             console.log(user);
//             if (user) {
//                 console.log(isAuthenticated)
//                 setIsAuthenticated(true);
//             }
//         };

//         checkAuthentication();
//     }, []); // Empty dependency array ensures this runs only once on mount

//     console.log(isAuthenticated)
//     return isAuthenticated;
// };

// export default useAuth;
