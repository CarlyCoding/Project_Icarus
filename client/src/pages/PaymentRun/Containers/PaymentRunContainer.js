import PaymentRunComponent from "../Components/PaymentRunComponent"
import HomeButtonComponent from "../../../components/HomeButtonComponent";

function PaymentRunContainer(){
    return(
        <>
        <HomeButtonComponent></HomeButtonComponent>
        <h1> Payment Run </h1> 
        <PaymentRunComponent></PaymentRunComponent>
        </>
    )
}


export default PaymentRunContainer;