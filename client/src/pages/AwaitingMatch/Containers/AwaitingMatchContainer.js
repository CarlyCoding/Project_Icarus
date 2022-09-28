import React from "react";
import {useState} from React;

function viewInvoicesAwaitingMatch(){
    const [supplierId, setSupplierId]= useState(undefined);

    // Need to get invoices with the status_matched FALSE 
    const getInvoices = (supplierId) => {
        setSupplierId(supplierId);
    }

    return (
 
    )

}