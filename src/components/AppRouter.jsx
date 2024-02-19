import {Route, Routes, useNavigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth'

const AppRouter = () => {

    const auth = getAuth();
    const [user] = useAuthState(auth);
    
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate(CHAT_ROUTE)
        } else {
            navigate(LOGIN_ROUTE)
        }
    }, [user, navigate])

    return user ? 
        (
            <Routes>
                {privateRoutes.map(({ path, Component}) => (
                <Route key={path} path={path} element={<Component/>} exact={true}/>

                ))}
            
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({ path, Component}) => (
                <Route key={path} path={path} element={<Component/>} exact={true}/>

                ))}
                
            </Routes>
        )
    
}

export default AppRouter;