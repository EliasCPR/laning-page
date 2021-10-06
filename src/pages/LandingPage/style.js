import styled from "styled-components";

export const LandingPage = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: orange;

    >.loader-container{
    position: fixed;
    top:0; left:0;
    z-index: 10000;
    background: orange;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100%;
    width:100%;
    
    >img {
        width: 300px; height:300px;
        border-radius:50%;
    }
    }
`;