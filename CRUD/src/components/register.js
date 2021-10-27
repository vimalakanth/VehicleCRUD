import React from 'react';
import { Grid,Paper, Avatar, TextField, Button,FormControl } from '@material-ui/core'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';


const paperStyle={padding :20,height:'60vh',width:380, margin:"20px auto"}
const avatarStyle={backgroundColor:'#00F0FF'}
const header={backgroundColor:'#00F0FF'}
const textfield={width:'60vh'}
const btnstyle={margin:'20px 0px 20px 0px'}

function register () {
    return <div>
          <Grid>
          <Paper elevation={8} style={paperStyle}>
          <Grid align="center">
                    <Avatar style={avatarStyle}><AssignmentIndIcon/></Avatar>
           </Grid>
           <Grid align="center">
                     <h2 style={header}>Register</h2>
           </Grid>
           
         
             <FormControl>
             <TextField label='First name' style={textfield} placeholder='Please Enter first name' type='text' fullWidth required/>
                <TextField label='Last Name' placeholder='Please Enter last name' type='text' fullWidth required/>
                <TextField label='email' placeholder='Please Enter email' type='email' fullWidth required/>
                <TextField label='mobile' placeholder='Please Enter mobile' type='tel' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Register</Button>
            </FormControl>
              </Paper>

           </Grid>
  
       
    </div>
}
export default register;