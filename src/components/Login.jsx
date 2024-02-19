import { Container, Grid, Button } from '@mui/material';
import { Box } from '@mui/system';
import { getAuth,signInWithPopup,GoogleAuthProvider} from "firebase/auth";

const Login = () => {

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const login = async () => {
        const result = await signInWithPopup(auth, provider)
        const user = result.user
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