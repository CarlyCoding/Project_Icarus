import Home from "../pages/Home/Containers/Home";
import InvoiceEntryContainer from "../pages/InvoiceEntry/Containers/InvoiceEntryContainer";
import { BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom";

function NavigationContainer(){
    return (
        <Router>
            <Routes>
               <Route exact path="/" element={<Home/>} />
               <Route exact path="/KeyInvoice" element={<InvoiceEntryContainer/>} />
               {/* Enter here all the pathways for the pages */}
            </Routes>
        </Router>
    )
}

export default NavigationContainer