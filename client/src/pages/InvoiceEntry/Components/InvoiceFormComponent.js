import { useState } from "react";

function InvoiceFormComponent(){
    const [po_number, setPoNumber]= useState();
    const handlePoChange= (event) => {
        setPoNumber(event.target.value);
    }
    // Do a setter for state for every field
    const handleSubmit= (event) => {
        event.preventDefault();
        alert("Clicked save");
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Po Number:
                <input type="text" value={po_number} onChange={handlePoChange}/>
            </label>
            {/* Next labels should be the next fields */}
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default InvoiceFormComponent;