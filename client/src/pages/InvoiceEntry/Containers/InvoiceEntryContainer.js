import InvoiceFormComponent from "../Components/InvoiceFormComponent";

function InvoiceEntryContainer(){
    return(
    <>
    <div className="Invoice Header"/>
    <h1>Invoice Entry</h1>

    <div className='Invoice Entry'>
        
        <h3>
            Key new invoice below.
        </h3>
        <InvoiceFormComponent></InvoiceFormComponent>
    </div>
    
    </>
    )
}

export default InvoiceEntryContainer;