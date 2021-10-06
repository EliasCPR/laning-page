import { Link } from "react-router-dom";
import cachorro from "../../assents/cachorro.gif";
import { LandingPage } from "./style";

function landingPage(){
    return (
        <>
        <LandingPage>
            <div div class="loader-container">
                <img src={cachorro}/>
                <Link to="/Login">Clique aqui</Link>
            </div>    
        </LandingPage>
            
        </>
    )
}

export default landingPage;