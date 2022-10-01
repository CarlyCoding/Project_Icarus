import { PageLink } from '../Components/pageLink';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
function Home() {
    return (
      <Container>
      <div className="Header_Section">
    
            <h1>Icarus Accounts Payable Software</h1>

            <h2>Logo here</h2>

            <h3> Select your page</h3>
      </div>

      <div className= "HomeLinks">
        <Stack direction="row" spacing={2}>
        <PageLink link={'/ViewPos'} text={'View purchase orders'}/>
        <PageLink link={'/KeyInvoice'} text={'Manually key invoice'}/>
        <PageLink link={'/ViewKeyed'} text={'View keyed invoices'}/>
        <PageLink link={'/ViewPaymentRun'} text={'View payment run'}/>
        </Stack>
      </div>
      </Container>
    );
  }
  
  export default Home;