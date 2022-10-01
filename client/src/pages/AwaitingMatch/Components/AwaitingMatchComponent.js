import { ThemeContext } from "@emotion/react";
import { useEffect, useState } from "react";

function AwaitingMatchComponent({supplierId}){
    const [invoices, setInvoices]= useState([]);

// Unmatched is == False will be built into backend.
    useEffect(
        () => {
            fetch(`http://localhost:3000/suppliers/${supplierId}/invoices/unmatched`)
            .then(res => res.json())
            .then(setInvoices)
        },
        [supplierId]
    )


    return(
        supplierId
            ?
                <table>
                    <thead>
                        <th>Invoice Number</th>
                        <th>Invoice Date</th>
                        <th>Description of goods</th>
                        <th>Pre-Tax total</th>
                        <th>Tax Rate</th>
                        <th>Tax to Pay</th>
                        <th>Total to pay</th>
                        <th>Status matched for payment</th>
                    </thead>
                    <tbody>
                        {invoices.map(invoice => {
                            // Remember on return JS will need the next instruction on the same line or will assume null. 
                            return <tr>
                                <td><a href={`/InvoiceMatch/${invoice.invoice_number}`}>{invoice.invoice_number}</a></td>
                                <td>{invoice.date_of_invoice}</td>
                                <td>{invoice.description_of_goods}</td>
                                <td>{invoice.pre_tax}</td>
                                <td>{invoice.tax_rate}</td>
                                <td>{invoice.tax_to_pay}</td>
                                <td>{invoice.total_to_pay}</td>
                                <td>{invoice.status_matched}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            :<h2> Choose a supplier</h2>
    )
    
}
 export default AwaitingMatchComponent;
