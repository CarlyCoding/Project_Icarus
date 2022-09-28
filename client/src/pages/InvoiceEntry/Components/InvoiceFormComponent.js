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
            {/* Next labels should be the next fields */}
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default InvoiceFormComponent;