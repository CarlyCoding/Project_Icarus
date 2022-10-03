import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function PaymentRunComponent(){
    const [invoices, setInvoices] = useState([]);


useEffect(
    () => {
        fetch("http://localhost:3000/invoices/matched")
        .then(res => res.json())
        .then(setInvoices)
    },
    []
)

return(
    <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Invoice number</TableCell>
                  <TableCell align="right">Invoice Date</TableCell>
                  <TableCell align="right">Description of Goods</TableCell>
                  <TableCell align="right">Pre_tax total</TableCell>
                  <TableCell align="right">Tax Rate</TableCell>
                  <TableCell align="right">Tax to Pay</TableCell>
                  <TableCell align="right">Total to pay</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
          {invoices.map((invoice) => (
            <TableRow
              key={invoice.invoice_number}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {invoice.invoice_number}
              </TableCell>
              <TableCell align="right">{invoice.invoice_date}</TableCell>
              <TableCell align="right">{invoice.description_of_goods}</TableCell>
              <TableCell align="right">{invoice.pre_tax}</TableCell>
              <TableCell align="right">{invoice.tax_rate}</TableCell>
              <TableCell align="right">{invoice.tax_to_pay}</TableCell>
              <TableCell align="right">{invoice.total_to_pay}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}



export default PaymentRunComponent;