import  {useState,useEffect} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import axios from 'axios';

import {useHistory} from 'react-router-dom'
import { setUserSession } from '../Utils/Common';



const Login=(props)=>{
  
    const useFormInput = initialValue => {
        const [value, setValue] = useState(initialValue);
       
        const handleChange = e => {
          setValue(e.target.value);
         }
    
        return {
          value,
          onChange: handleChange
        }
      }

    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const History=useHistory();
    useEffect(() => {
        if(localStorage.getItem('user-info') || (sessionStorage.getItem('token'))){
            History.push("/vehiclelist")
        }else{
            History.push("/")
        }
  }, [])
   

    const handleLogin = async() => {
        setError(null);
        setLoading(true);

        axios.post('http://localhost:3003/auth/', { username: username.value, password: password.value })
       
        .then(response => {

          console.log(response.data);
          setLoading(false);

        
            setUserSession(response.data.access_token,response.data.username);

            localStorage.setItem("user-info",JSON.stringify(response))
           
            props.history.push('/header');
        }).catch(error => {
        setLoading(false);
        setError(error.response.data.message);
        });
    }

    const paperStyle={padding :20,height:'60vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#00F0FF'}
    const btnstyle={margin:'20px 0px 20px 0px'}
   
    return(
        <Grid>
            <Paper elevation={8} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOpenIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>

                <form >
                <TextField id='username' {...username}  name='username' label='username' placeholder='Please Enter username' type='text' fullWidth required/>
                <TextField id='password' {...password} name='password' label='Password' placeholder='Please Enter password' type='password' fullWidth required/>
                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth
                value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} >Sign in</Button>
                  </form>

                <Typography >
                <Link href="#" >
                        Forget Password
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="./register" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    );

}

export default Login;