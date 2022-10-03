import { useEffect, useState } from "react";

function PaymentRunComponent(){
    const [invoices, setInvoices] = useState([]);


useEffect(
    () => {
        fetch("http://localhost:3000/invoices/matched")
        .then(res => res.json())
        .then(setInvoices)
    },
    []
)

return(
    <>
    <table>
        <thead>
            <th>Invoice number</th>
            <th>Invoice Date</th>
            <th>Description of goods</th>
            <th>Pre-Tax total</th>
            <th>Tax Rate</th>
            <th>Tax to pay</th>
            <th>Total to pay</th>
        </thead>
    <tbody>
        {invoices.map(invoice =>{
            return <tr>
                <td>{invoice.invoice_number}</td>
                <td>{invoice.date_of_invoice}</td>
                <td>{invoice.description_of_goods}</td>
                <td>{invoice.pre_tax}</td>
                <td>{invoice.tax_rate}</td>
                <td>{invoice.tax_to_pay}</td>
                <td>{invoice.total_to_pay}</td>
            </tr>
        })}

    </tbody>
    </table>
    </>
    )
}

export default PaymentRunComponent;