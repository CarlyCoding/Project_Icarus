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
        <h1> Invoice matching Screen </h1>
            <span>{invoice.invoice_number} {invoice.total_to_pay}</span>
        </>
    )


};

export default InvoiceMatchContainer;