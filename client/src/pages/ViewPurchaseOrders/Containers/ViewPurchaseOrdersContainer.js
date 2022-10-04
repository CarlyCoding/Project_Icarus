import { useState } from 'react';
import PurchaseOrdersComponent from '../Components/PurchaseOrdersComponent';
import SearchSupplierComponent from '../../../components/SearchSupplierComponent';
import HomeButtonComponent from '../../../components/HomeButtonComponent';


function ViewPurchaseOrdersContainer(){
    const [supplierId, setSupplierId]= useState(undefined);

    const getPOs = (supplierId) => {
        setSupplierId(supplierId);
    }
    return (
        <>
            <HomeButtonComponent></HomeButtonComponent> 
            <SearchSupplierComponent onSupplierSelected={getPOs}></SearchSupplierComponent>
            <PurchaseOrdersComponent supplierId={supplierId}></PurchaseOrdersComponent>
        </>
    )
    
}

export default ViewPurchaseOrdersContainer;