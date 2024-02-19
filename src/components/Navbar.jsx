import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import {Button, Grid} from "@mui/material";
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Navbar = () => {

    const auth = getAuth();
    const [user] = useAuthState(auth);

    

    const theme = createTheme({
    palette: {
        primary: {
        main: '#aad6c7', // Замените на цвет, который вы хотите использовать для основного цвета
        },
        secondary: {
        main: '#dc004e', // Замените на цвет, который вы хотите использовать для второстепенного цвета
        },
    },
    });

    return (
        <AppBar theme={theme} position="static">
            <Toolbar variant='dense'>
                <Grid container justifyContent={'flex-end'}>
                    {
                        user 
                        ? <Button onClick={() => auth.signOut()} color={'inherit'} variant='outlined'>Exit</Button>
                        : <NavLink to={LOGIN_ROUTE}>
                            <Button color={'inherit'} variant='outlined'>Login</Button>
                        </NavLink>
                    }
                    
                    
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;