import Home from "../pages/Home/Containers/Home";
import { BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom";

function NavigationContainer(){
    return (
        <Router>
            <Routes>
               <Route exact path="/" element={<Home/>} />
            </Routes>
        </Router>
    )
}

export default NavigationContainer