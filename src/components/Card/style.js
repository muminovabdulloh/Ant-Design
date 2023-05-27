import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
border: var(--border);
border-radius: 5px;
transition: 0.2s all linear;
margin-top: 30px;
:hover{
    box-shadow: var(--shadow);
}
`
const Header = styled.div`
width: 100%;
display: flex;
gap: 10px;
flex-wrap: wrap;
padding: 10px;
`

const Body = styled.fieldset`
border: var(--border);
border-left: 0;
border-right: 0;
padding: 10px;
`

const Footer = styled.div`
border-top: var(--border);
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
`

const FooterIcon = styled.img`
width: 20px;
opacity: 0.7;
:hover{
    opacity: 1;
}
`


export {Container, Header, Body, Footer, FooterIcon};