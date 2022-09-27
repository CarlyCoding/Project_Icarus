function Home() {
    return (
      <>
      <div className="Header_Section">
    
            <h1>Icarus Accounts Payable Software</h1>

            <h2>Logo here</h2>

            <br>


            </br>

            <h3> Select your page</h3>
      </div>

      <div className= "HomeLinks">
        {/* Insert the card details and correct linking- DEAD LINKS */}
        <a href={'/ViewPos'}> "View purchase orders"</a>
        <br></br>
        <p></p>
        <a href={'/KeyInvoice'}> "Manually key a new invoice"</a>
        <br></br>
        <p></p>
        <a href={'/ViewPos'}> "View invoices unmatched"</a>
        <br></br>
        <p></p>
        <a href={'/ViewPos'}> "View payment run"</a>
        <br></br>
      </div>
      </>
    );
  }
  
  export default Home;