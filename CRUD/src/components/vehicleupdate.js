import React, { useState,useEffect } from 'react';
import {Paper, TextField } from '@material-ui/core'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Header from '../components/header';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const VehicleUpdate = (props) => {
  //  const [errorMsg, setErrorMsg] = useState('');

 
  //  const paperStyle={width:250, margin:" auto"};
    const tablecss={padding :0,width:950,  align:"center"}
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
  
    const handleVehicleUpdate = async() => {
      setError(null);
      setLoading(true);
  
      axios.put('http://localhost:3003/vehi/',{vehi_id:ID,vehi_type:vehicletype.value, status: vehiclestatus.value})
      .then(response => {
        setLoading(false);
         // console.log("asdasds");
         localStorage.removeItem("ID")
         localStorage.removeItem("vehicletype")
         localStorage.removeItem("status")
          props.history.push('/vehiclelist');
      }).catch(error => {
        setLoading(false);
        console.log(error);
  
      });
  }
  
  const [ID, setID] = useState('');
  const [vehicletype_st, setvehicletype_st] = useState('');
  const [status_st, setstatus_st] = useState('');
  
  
  useEffect(() => {
          setID(localStorage.getItem('ID'))
          setvehicletype_st(localStorage.getItem('vehicletype'))
          setstatus_st(localStorage.getItem('status'))
  }, []);

return (
    <>
    <Header/>

        <form>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >

<TableContainer component={Paper} style={tablecss}>
      <Table sx={{ maxWidth: 800 }} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right"><strong>ID</strong></TableCell>
            <TableCell align="right"><strong>Excisting Vehicle type</strong></TableCell>
            <TableCell align="right"><strong>New Vehicle Type</strong></TableCell>
            <TableCell align="right"><strong>Existing Status</strong></TableCell>
            <TableCell align="right"><strong>New Status</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableCell align="right"><strong><input placeholder='First Name' value={ID} onChange={(e) => setID(e.target.value)} disabled/></strong></TableCell>
            <TableCell align="right"><strong><input placeholder='First Name' value={vehicletype_st} onChange={(e) => setvehicletype_st(e.target.value)} disabled/></strong></TableCell>
            <TableCell align="right">
                <TextField

id="selectvehitype"
select
value={currency}
onChange={handleChange}
{...vehicletype} 
>
{currencies.map((option) => (
  <MenuItem key={option.value} value={option.value}>
    {option.label}
  </MenuItem>
))}
</TextField> </TableCell>

<TableCell align="right">
<TableCell align="right"><strong><input placeholder='First Name' value={status_st} onChange={(e) => setstatus_st(e.target.value)} disabled/></strong></TableCell>

</TableCell>
<TableCell align="right">
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
</TableCell>
<TableRow>
<TableCell align="right">
{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}

<button type="submit" variant="outlined"  style={btnstyle} fullWidth 
value={loading ? 'Loading...' : 'Login'} onClick={handleVehicleUpdate} disabled={loading} 
>submit</button>
</TableCell>
</TableRow>
        </TableBody>
        </Table>
        </TableContainer>
                
        


      

      </Box>


      </form>
    
      </>
  );
    };
export default VehicleUpdate;