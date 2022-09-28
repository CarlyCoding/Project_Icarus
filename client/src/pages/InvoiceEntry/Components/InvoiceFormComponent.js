import { useState } from "react";

function InvoiceFormComponent(){
    const [po_number, setPoNumber]= useState();
    const handlePoChange= (event) => {
        setPoNumber(event.target.value);
    }
        // Supplier field should be dropdown from db- enter supplier here. 

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

    const [total_to_pay, setTotalToPay]= useState();
    const handleTotalToPayEntry= (event) =>{
        setTotalToPay(event.target.value);
    }
    // Add a field to attach a PDF here to the invoice record- if possible


    const handleSubmit= (event) => {
        event.preventDefault();
        alert("Clicked save");
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Po Number:
                <input type="text" value={po_number} onChange={handlePoChange}/>
            </label>
            <label>
                Invoice number:
                <input type="text" value={invoice_number} onChange={handleInvoiceNumberEntry}/>
            </label>
            <label>
                Invoice Date:
                <input type="text" value={invoice_date} onChange={handleInvoiceDateEntry}/>
            </label>
            <label>
                Description of goods:
                <input type="text" value={goods_description} onChange={handleGoodsDescriptionEntry}/>
            </label>
            <label>
                Net Amount:
                <input type="text" value={net_amount} onChange={handleNetAmountEntry}/>
            </label>
            <label>
                Tax Rate:
                <input type="text" value={tax_rate} onChange={handleTaxRateEntry}/>
            </label>
            <label>
                Total to pay:
                <input type="text" value={total_to_pay} onChange={handleTotalToPayEntry}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default InvoiceFormComponent;