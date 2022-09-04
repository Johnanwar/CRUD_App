import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import Delete from '../assets/delete.svg';
import Edit from '../assets/edit.svg';
import toast from 'react-hot-toast';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function Tables({tableData, setTableData, setValues}) {

  
const deleteHandler = async (id) => {
  console.log(id)
   const removedArr = [...tableData].filter(el => el.id !== id);
   setTableData(removedArr);
   toast.error('Card Deleted Successfully');

}
const editHandler = async (el, id) => {
  setValues(el)
}

  return (
    <>

    {tableData && tableData.length > 0 ?
      ( 
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell align="right">School</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Id</StyledTableCell>
            <StyledTableCell align="right">E dit / Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {tableData?.map((el, idx)=>(
            <StyledTableRow key={idx}>
              <StyledTableCell component="th" scope="row">
                {el.firstName}    
              </StyledTableCell>
              <StyledTableCell align="right"> {el.school}</StyledTableCell>
              <StyledTableCell align="right"> {el.date} </StyledTableCell>
              <StyledTableCell align="right"> {el.idCard}</StyledTableCell>
              <TableCell align="right">
                        <IconButton
                         onClick={() => editHandler( el,el.id)} 
                         color="primary"
                         aria-label="update customer">
                               <img style={{width:"30px" , height:"30px"}} src={Edit}/>
                        </IconButton>
                        <IconButton onClick={() => deleteHandler(el.id)}
                         color="secondary" aria-label="delete customer">
                               <img style={{width:"30px" , height:"30px"}} src={Delete}/>
                        </IconButton>
                      </TableCell>
            </StyledTableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer>
    ) :""}
    </>
  );
}
