import  {useState,useEffect} from 'react'
import Header from '../components/header';
import { Button } from '@material-ui/core'
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const VehicleList = (props) => {

  const [vehicle, setvehicle] = useState([]);
  const tablecss={padding :20,width:750, margin:"auto", align:"center"}

  const fetchProducts = async () => {
    const { data } = await axios.get(
      "http://localhost:3003/vehi"
    );
    const vehicle = data;
    setvehicle(vehicle);
    //console.log(vehicle);
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  const delrec = async(idval) => {
   const url="http://localhost:3003/vehi/"+idval;
    axios.delete(url)
    .then(response => {
      //console.log(response);
      //<fetchProducts/>
      props.history.push('/vehiclelist');
    }).catch(error => {
      props.history.push('/vehiclelist');
            console.log(error);
            console.error('There was an error!', error);
    });
   
}

const setData = (data) => {
  //console.log(data);
  
  localStorage.setItem('ID', data.vehi_id);
  localStorage.setItem('vehicletype', data.vehi_type);
  localStorage.setItem('status', data.status);
  props.history.push('/upd');
}



  return (
    <div>
     <Header/>

<TableContainer component={Paper} style={tablecss}>
      <Table sx={{ maxWidth: 300 }} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Vehicle ID</strong></TableCell>
            <TableCell align="right"><strong>Vehicle Type</strong></TableCell>
            <TableCell align="right"><strong>Status</strong></TableCell>
            <TableCell align="right"><strong>Created At</strong></TableCell>
            <TableCell align="right"><strong>Updated At</strong></TableCell>
            <TableCell align="right"><strong>Update</strong></TableCell>
            <TableCell align="right"><strong>Delete</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicle.map((vehicle) => (
            <TableRow
              key={vehicle.vehi_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {vehicle.vehi_id} </TableCell>
              <TableCell align="right">{vehicle.vehi_type}</TableCell>
              <TableCell align="right">{'' +vehicle.status}</TableCell>
              <TableCell align="right">{vehicle.createdAt}</TableCell>
              <TableCell align="right">{vehicle.updatedAt}</TableCell>
              <TableCell align="right">
<button onClick={() => setData(vehicle)}>Update</button></TableCell>
              <TableCell align="right"><button id="del" name="del" type="button"  
             onClick={() => delrec(vehicle.vehi_id)}>Delete</button> </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
export default VehicleList;