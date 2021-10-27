import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid,Paper, Button } from '@material-ui/core'


const paperStyle={height:'5vh', margin:"10px"}
const buttonmenu={margin:'2vh'}
const Header = () => {
  return (
    <Grid>
      <Paper elevation={8} style={paperStyle}>
      <Grid align='center'>
                    <h5>Vehicle Details CRUD Applictaion</h5>
      </Grid>
       </Paper>
      <Grid align='center'>
          <Button variant="outlined" color="success" style={buttonmenu}>
                <NavLink to="/vehiclelist" className="link" activeClassName="active" >
                  Vehicle List
            </NavLink>
      </Button>
      <Button variant="outlined" color="success" style={buttonmenu}>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Vehicle
        </NavLink>
        </Button>
      </Grid>
      </Grid>
     
  );
};

export default Header;