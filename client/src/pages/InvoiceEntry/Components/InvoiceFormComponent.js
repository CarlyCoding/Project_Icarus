import { useMemo, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function InvoiceFormComponent(){
    const [po_number, setPoNumber]= useState();
    const[supplier_name, setSupplierName]= useState();
    const handlePoChange= (event) => {
        const poNumber = event.target.value;

        setPoNumber(poNumber);
        if (poNumber) {
            fetch(`http://localhost:3000/orders/${poNumber}/supplierName`)
            .then(res => res.json())
            .then(setSupplierName);
        } else {
            setSupplierName("");
        }
        
    }

    const [invoice_number, setInvoiceNumber]= useState();
    const handleInvoiceNumberEntry= (event) =>{
        setInvoiceNumber(event.target.value);
    }

    const [invoice_date, setInvoiceDate]= useState();
    const handleInvoiceDateEntry= (event) =>{
        setInvoiceDate(event.target.value);
    }

    const [goods_description, setGoodsDescription]= useState();
    const handleGoodsDescriptionEntry= (event) =>{
        setGoodsDescription(event.target.value);
    }

    const [net_amount, setNetAmount]= useState();
    const handleNetAmountEntry= (event) =>{
        setNetAmount(event.target.value);
    }

    const [tax_rate, setTaxRate]= useState();
    const handleTaxRateEntry= (event) =>{
        setTaxRate(event.target.value);
    }

    // Use memo is for a calculation every time the dependancies change[].
    const tax_to_pay = useMemo(() => {
        return net_amount * tax_rate/100;
    },[net_amount,tax_rate]);

    const total_to_pay = useMemo(() => {
        return tax_to_pay + Number(net_amount);
    }, [net_amount, tax_to_pay]);
    // Change goods description to description of goods/ to match the db name if this is an issue.

    // Number used 
    const handleSubmit= (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/invoices`, {
            method:"POST",
            body: JSON.stringify({
                "po_number": po_number,
                "invoice_number": invoice_number,
                "invoice_date": invoice_date,
                "goods_description": goods_description,
                "net_amount": Number (net_amount),
                "tax_rate": Number (tax_rate),
                "tax_to_pay": tax_to_pay,
                "total_to_pay": total_to_pay
            }),
            headers:{
                "content-type":"application/JSON"
            }
        }).then(() => {
            setPoNumber("");
            setInvoiceNumber("");
            setInvoiceDate("");
            setGoodsDescription("");
            setNetAmount("");
            setTaxRate("");
        })
    }

    return(
            <>
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
        <div>
        <TextField
            required
            label="PO Number"
            value={po_number} onChange={handlePoChange}
        />
        <TextField
          disabled
          value={supplier_name}
        />
        <TextField
            required
            label="Invoice number"
            value={invoice_number} onChange={handleInvoiceNumberEntry}
        />
        <TextField
            required
            type="date"
            label="Invoice Date"
            value={invoice_date} onChange={handleInvoiceDateEntry}
        />
        </div>

        <div>
        <TextField
        required
        label="Description of goods"
        value={goods_description} onChange={handleGoodsDescriptionEntry}
        />
        <TextField
        required
        label="Net Amount"
        value={net_amount} onChange={handleNetAmountEntry}
        />
        <TextField
        required
        label="Tax Rate"
        value={tax_rate} onChange={handleTaxRateEntry}
        />
        <TextField
          disabled
          value={tax_to_pay}
        />
        <TextField
        disabled
        label="Total to pay"
        value={total_to_pay}
        />
        </div>
        <input type="submit" value="Submit" onClick={handleSubmit}/>
        </Box>
        </>
    )
}

export default InvoiceFormComponent;