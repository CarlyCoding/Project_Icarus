import { PageLink } from '../Components/pageLink';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PaidIcon from '@mui/icons-material/Paid';

import './Home.css';

function Home() {
    return (
      <Container>
      <div className="Header_Section">
    
            <h1>Icarus Accounts Payable Software</h1>
      </div>
      <div className="Padding_Class">

      </div>
      <div className="Select_Section">

            <h3> Select your page</h3>
        
        
            
      </div>


      <div className= "HomeLinks">
        <Stack direction="row" spacing={2}>
        <PageLink icon={<ListAltIcon fontSize='large'/>} link={'/ViewPos'} text={'View purchase orders'}/>
        <PageLink icon={<BorderColorIcon fontSize='large'/>}link={'/KeyInvoice'} text={'Manually key invoice'}/>
        <PageLink icon={<ReceiptLongIcon fontSize='large'/>} link={'/ViewKeyed'} text={'View keyed invoices'}/>
        <PageLink icon={<PaidIcon fontSize='large'/>}link={'/ViewPaymentRun'} text={'View payment run'}/>
        </Stack>
      </div>
      </Container>
    );
  }
  
  export default Home;