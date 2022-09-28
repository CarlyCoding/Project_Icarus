import InvoiceFormComponent from "../Components/InvoiceFormComponent";

function InvoiceEntryContainer(){
    return(
    <>
    <div className='Invoice Header'>
        <h1>
            Key new invoice below.
        </h1>
        <InvoiceFormComponent></InvoiceFormComponent>
    </div>
    
    </>
    )
}

export default InvoiceEntryContainer;