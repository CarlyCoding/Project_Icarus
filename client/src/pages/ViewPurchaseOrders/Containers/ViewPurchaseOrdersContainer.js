import { useState } from 'react';
import PurchaseOrdersComponent from '../Components/PurchaseOrdersComponent';
import SearchSupplierComponent from '../Components/SearchSupplierComponent';

function ViewPurchaseOrdersContainer(){
    const [supplierId, setSupplierId]= useState(undefined);

    const getPOs = (supplierId) => {
        setSupplierId(supplierId);
    }
    return (
        <>
            <SearchSupplierComponent onSupplierSelected={getPOs}></SearchSupplierComponent>
            <PurchaseOrdersComponent supplierId={supplierId}></PurchaseOrdersComponent>
        </>
    )
    
}

export default ViewPurchaseOrdersContainer;