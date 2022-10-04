import { useState } from 'react';
import SearchSupplierComponent from "../../../components/SearchSupplierComponent";
import AwaitingMatchComponent from "../Components/AwaitingMatchComponent";
import HomeButtonComponent from '../../../components/HomeButtonComponent';
import Home from '../../Home/Containers/Home';

function AwaitingMatchContainer(){
    const [supplierId, setSupplierId]= useState(undefined);

    // Need to get invoices with the status_matched FALSE 
    const getInvoices = (supplierId) => {
        setSupplierId(supplierId);
    }
    return(
        <>
        <HomeButtonComponent></HomeButtonComponent>
        <SearchSupplierComponent onSupplierSelected={getInvoices}></SearchSupplierComponent>
        <AwaitingMatchComponent supplierId={supplierId}></AwaitingMatchComponent>
        </>
    )

}

export default AwaitingMatchContainer;