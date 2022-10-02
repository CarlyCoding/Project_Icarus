import { useEffect, useState } from "react"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

function SearchSupplierComponent({onSupplierSelected}){
    const [suppliers, setSuppliers] = useState([]);
    const [selectedSupplier, setSelectedSupplier] = useState("");
    const handleChange = (event) => {
        setSelectedSupplier(event.target.value)
        onSupplierSelected(event.target.value)
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
            <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Supplier</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selectedSupplier}
          label="Supplier"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {suppliers.map(supplier => {
                    return <MenuItem key={supplier.id} value={supplier.id}>{supplier.name}</MenuItem>
                })}
        </Select>
        <FormHelperText>Select supplier to view associated items</FormHelperText>
      </FormControl>
        </div>
    )
}

export default SearchSupplierComponent;