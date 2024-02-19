import { Container, Grid, Button } from '@mui/material';
import { Box } from '@mui/system';
import { useContext } from 'react';
import firebase from 'firebase/compat/app';
import { Context } from '../main.jsx';


const Login = () => {

    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <Container>
            <Grid container 
                style={{height: window.innerHeight - 50}}
                alignItems="center"
                justifyContent="center"
                >
                    <Grid style={{width: 400, backgroundColor: 'lightgray', padding: 20}}
                    container 
                    alignItems="center"
                    direction="column">
                        <Box p={5}>
                            <Button onClick={login} variant="outlined">Login with Google</Button>
                        </Box>
                    </Grid>
            </Grid>
            
        </Container>
    );
}

export default Login;