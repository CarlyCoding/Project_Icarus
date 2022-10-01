// Import the invoice card components.
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";


const InvoiceMatchContainer = () => {
    const [invoice, setInvoice] = useState([]);

    const {invoice_number} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/invoices/${invoice_number}`)
        .then(res => res.json())
        .then(setInvoice);
    }, []);

    return(
        <>
        {/* Do same for the PO here.  */}

        <h1> Invoice matching Screen </h1>
        
        <h3>Purchase order associated for match</h3>
        <h3>Invoice detail for match</h3>
            <span>Invoice number {invoice.invoice_number} {invoice.description_of_goods} {invoice.pre_tax} {invoice.tax_rate} {invoice.total_to_pay}</span>
        </>
        // Should have an on click change bool to true for status_matched. 
    )


};

export default InvoiceMatchContainer;