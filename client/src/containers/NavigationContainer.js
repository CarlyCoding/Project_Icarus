import Home from "../pages/Home/Containers/Home";
import InvoiceEntryContainer from "../pages/InvoiceEntry/Containers/InvoiceEntryContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewPurchaseOrdersContainer from "../pages/ViewPurchaseOrders/Containers/ViewPurchaseOrdersContainer";
import AwaitingMatchContainer from "../pages/AwaitingMatch/Containers/AwaitingMatchContainer";
import PaymentRunContainer from "../pages/PaymentRun/Containers/PaymentRunContainer"

function NavigationContainer(){
    return (
        <Router>
            <Routes>
               <Route exact path="/" element={<Home/>} />
               <Route exact path="/ViewPos" element={<ViewPurchaseOrdersContainer/>} />
               <Route exact path="/KeyInvoice" element={<InvoiceEntryContainer/>} />
               <Route exact path="/ViewKeyed" element={<AwaitingMatchContainer/>} />
               <Route exact path="/ViewPaymentRun" element={<PaymentRunContainer/>} />
               {/* Enter here all the pathways for the pages */}
            </Routes>
        </Router>
    )
}

export default NavigationContainer