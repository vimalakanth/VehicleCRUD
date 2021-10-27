import React, { useState } from 'react';
import { Grid,Paper, TextField } from '@material-ui/core'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Header from '../components/header';

const VehicleForm = (props) => {

  //const [errorMsg, setErrorMsg] = useState('');

 
  const paperStyle={padding :20,width:250, margin:"20px auto"};
  const btnstyle={margin:'20px 0px 20px 0px'}

  const currencies = [
    {
      value: 'Car',
      label: 'Car',
    },
    {
      value: 'Van',
      label: 'Van',
    },
    {
      value: 'Bus',
      label: 'Bus',
    },
    {
      value: 'Jeep',
      label: 'Jeep',
    },
  ];
  const [currency, setCurrency] = React.useState('Car');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  
  const [status, setStatus] = React.useState('1');

    const handleChangeStatus = (event) => {
      setStatus(event.target.value);
      console.log(event.target.value);
    };


  const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
     // console.log(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }


  const [loading, setLoading] = useState(false);
  const vehiclestatus = useFormInput('');
  const vehicletype = useFormInput('');
  const [error, setError] = useState(null);

  const handleVehicleAdd = async() => {
    setError(null);
    setLoading(true);

    axios.post('http://localhost:3003/vehi/',{vehi_type:vehicletype.value, status: vehiclestatus.value})
    .then(response => {
      setLoading(false);
       // console.log("asdasds");

        props.history.push('/vehiclelist');
    }).catch(error => {
      setLoading(false);
      console.log(error);

    });
}


  return (
    <>
    <Header/>
    <Grid>
      <Paper elevation={8} style={paperStyle}>

        <form>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >

        
      
                
        <TextField

          id="selectvehitype"
          select
          label="Vehicle type"
          value={currency}
          onChange={handleChange}
          helperText="Please select vehicle type"
          {...vehicletype} 
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>


        <RadioGroup
        aria-label="gender"
        name="controlled-radio-buttons-group"
        value={status}
        onChange={handleChangeStatus}
        {...vehiclestatus} 
        
      >
        <FormControlLabel value="1" control={<Radio />} label="Active" />
        <FormControlLabel value="0" control={<Radio />} label="Inactive" />
      </RadioGroup>

      </Box>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >

                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}

        <button type="submit" variant="outlined"  style={btnstyle} fullWidth 
        value={loading ? 'Loading...' : 'Login'} onClick={handleVehicleAdd} disabled={loading} 
        >submit</button>
      </Box>
      </form>

      </Paper>
    </Grid>
    
      </>
  );
};

export default VehicleForm;