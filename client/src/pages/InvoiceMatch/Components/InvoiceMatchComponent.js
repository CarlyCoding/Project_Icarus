import { Link } from 'react-router-dom'

const InvoiceMatchComponent= ({ invoice, invoice_number}) => {

    const passData = [invoice, invoice_number]


    return(
        <>
            <div className='Invoice match test'>

            </div>
            <div classname= "Invoice number">
                {invoice.invoice_number}
            </div>
            <div classname= "total_to_pay">
                {invoice.total_to_pay}
            </div>

        </>
    )

}

export default InvoiceMatchComponent;