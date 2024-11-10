import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CrudsItem from './Crudsitem';



export default function ProductTable() {
  return (
    <TableContainer className='mt-10' component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>					
            <TableCell sx={{fontWeight:"bold"}}>Id</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Title</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Price</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Ads</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Tax</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Discount</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Total</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Category</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Update</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <CrudsItem/>

        </TableBody>
      </Table>
    </TableContainer>
  );
}