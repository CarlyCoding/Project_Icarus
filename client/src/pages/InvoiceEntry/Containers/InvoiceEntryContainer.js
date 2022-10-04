import HomeButtonComponent from "../../../components/HomeButtonComponent";
import InvoiceFormComponent from "../Components/InvoiceFormComponent";


function InvoiceEntryContainer(){
    return(
    <>
    <HomeButtonComponent></HomeButtonComponent>
    <h1>Invoice Entry</h1>

    <div className='Invoice_Entry'>
        
        <h3>
            Key new invoice below.
        </h3>
        <InvoiceFormComponent></InvoiceFormComponent>
    </div>
    
    </>
    )
}

export default InvoiceEntryContainer;