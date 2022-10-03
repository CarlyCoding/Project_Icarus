import { ThemeContext } from "@emotion/react";
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AwaitingMatchComponent({supplierId}){
    const [invoices, setInvoices]= useState([]);

    useEffect(
        () => {
            fetch(`http://localhost:3000/suppliers/${supplierId}/invoices/unmatched`)
            .then(res => res.json())
            .then(setInvoices)
        },
        [supplierId]
    )


    return(
        supplierId
            ?
                invoices.length > 0
                ? <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Invoice Number</TableCell>
                      <TableCell align="right">Date of Invoice</TableCell>
                      <TableCell align="right">Description of Goods</TableCell>
                      <TableCell align="right">Pre- tax</TableCell>
                      <TableCell align="right">Tax Rate</TableCell>
                      <TableCell align="right">Tax to pay</TableCell>
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
                  <TableCell align="right">{invoice.date_of_invoice}</TableCell>
                  <TableCell align="right">{invoice.description_of_goods}</TableCell>
                  <TableCell align="right">{invoice.net_amount}</TableCell>
                  <TableCell align="right">{invoice.tax_rate}</TableCell>
                  <TableCell align="right">{invoice.tax_to_pay}</TableCell>
                  <TableCell align="right">{invoice.total_to_pay}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
                        : <span>no unmatched</span>
                        :<h2> Choose a supplier</h2>

    )
    
}
 export default AwaitingMatchComponent;
