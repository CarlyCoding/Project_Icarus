import { ThemeContext } from "@emotion/react";
import { useEffect, useState } from "react";

function AwaitingMatchComponent(){
    const [supplierId, setSupplierId]= useState(undefined);


    useEffect(
        () => {
            fetch(`http://localhost:3000/suppliers/${supplierId}/orders`)
            .then(res => res.json)
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
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </thead>
        </table>


    )
}



// supplierId 
// ?
//     <table>
//         <thead>
//             <th>PO Number</th>
//             <th>Description</th>
//             <th>Date</th>
//             <th>Raised</th>
//             <th>Receipted</th>
//             <th>Tax Rate</th>
//         </thead>
//         <tbody>
//         {orders.map(order => {
//             // th is for table header and td is for table data
//             return <tr>
//                 <td>{order.po_number}</td>
//                 <td>{order.description}</td>
//                 <td>{order.date}</td>
//                 <td>{order.raised}</td>
//                 <td>{order.receipted}</td>
//                 <td>{order.tax_rate}</td>
//             </tr>
//         })}
//         </tbody>
//     </table>
// :
//     <h3>Choose a supplier to view PO's</h3>
// )
// }

// export default PurchaseOrdersComponent;
