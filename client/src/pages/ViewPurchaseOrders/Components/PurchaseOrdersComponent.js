import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function PurchaseOrdersComponent({supplierId}){
    const [orders, setOrders] = useState([]);
    
    useEffect(
        () => {
            fetch(`http://localhost:3000/suppliers/${supplierId}/orders`)
            .then(res => res.json())
            .then(setOrders);
        },
        [supplierId]
    );

    return(
        supplierId 
            ?<TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>PO Number</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Raised</TableCell>
                  <TableCell align="right">Receipted</TableCell>
                  <TableCell align="right">Tax Rate</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.po_number}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order.po_number}
              </TableCell>
              <TableCell align="right">{order.description}</TableCell>
              <TableCell align="right">{order.date}</TableCell>
              <TableCell align="right">{order.full_amount_raised}</TableCell>
              <TableCell align="right">{order.receipted_amount}</TableCell>
              <TableCell align="right">{order.tax_rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            :
                <h3>Choose a supplier to view PO's</h3>
    )
}

export default PurchaseOrdersComponent;