import { useEffect, useState } from "react"

function SearchSupplierComponent({onSupplierSelected}){
    const [suppliers, setSuppliers] = useState([]);
    const [selectedSupplier, setSelectedSupplier] = useState(null);
    const handleChange = (event) => {
        setSelectedSupplier(event.target.value)
    };

    useEffect(
        () => {
            fetch('http://localhost:3000/suppliers')
            .then(res => res.json())
            .then(setSuppliers);
        }, []    
    )

    return(
        
        <div className="SearchSupplier">
            <h3> Search by supplier </h3>
            
            <select value={selectedSupplier} onChange={handleChange}>
                {suppliers.map(supplier => {
                    return <option key={supplier.id} value={supplier.id}>{supplier.name}</option>
                })}
            </select>
                
            <button onClick={() => onSupplierSelected(selectedSupplier)}>Select</button>
        </div>
    )
}

export default SearchSupplierComponent;