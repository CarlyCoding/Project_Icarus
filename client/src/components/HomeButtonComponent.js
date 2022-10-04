import { ClassNames } from "@emotion/react";
import NavigationContainer from "../containers/NavigationContainer";
import { PageLink } from "../pages/Home/Components/pageLink";
import HomeIcon from '@mui/icons-material/Home';
import Container from '@mui/material/Container';
import Home from "../pages/Home/Containers/Home";

function HomeButtonComponent (){
    return(
        <a href= '/'>
            <HomeIcon fontSize='large'/>
            
        </a>
    )
}

export default HomeButtonComponent;
