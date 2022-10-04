// Import the invoice card components.
import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import HomeButtonComponent from "../../../components/HomeButtonComponent";


const InvoiceMatchContainer = () => {
    const [invoice, setInvoice] = useState({});
    const {invoice_number} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/invoices/${invoice_number}`)
        .then(res => res.json())
        .then(setInvoice);
    }, []);

    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/invoices/${invoice_number}/order`)
        .then(res => res.json())
        .then(setOrder);
    }, []);




    const navigate = useNavigate();

    // Flask.json needs the header content type for the post
    const handleMatch= () => {
        fetch(`http://localhost:3000/invoices/${invoice_number}/match`, {
            method: "POST",
            body: JSON.stringify({
                "status_matched": true
            }),
            headers:{
                "content-type": "application/JSON"
            }
        }).then(() => {
            navigate('/ViewKeyed')
        })
    }
    return(
        <>
        <HomeButtonComponent></HomeButtonComponent> 
        <h1>Invoice matching Screen  </h1>
        
        <h3>Purchase order associated for match</h3>
        <span>Confirm match to order {order.po_number} for receipted amount of {order.receipted_amount} ?</span>

        <h3>Invoice detail for match</h3>
            <span>
            Invoice number: {invoice.invoice_number}
            <br></br>
            Description of goods: {invoice.description_of_goods}
            <br></br>
            Total before tax: {invoice.pre_tax}
            <br></br>
            Tax rate: {invoice.tax_rate}
            <br></br>
            Total to pay: {invoice.total_to_pay}</span>
            
            <p>
                
            </p>
            <div className="Match button">
            <button onClick={() => { handleMatch()  }}>Confirm match</button>
            </div>
        </>
    )


};

export default InvoiceMatchContainer;