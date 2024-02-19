import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import {Button, Grid} from "@mui/material";
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';

const Navbar = () => {

    const user = false;

    return (
        <AppBar color={'secondary'} position="static">
            <Toolbar variant='dense'>
                <Grid container justifyContent={'flex-end'}>
                    {
                        user 
                        ? <Button color={'inherit'} variant='outlined'>Exit</Button>
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