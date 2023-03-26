import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as tg } from "../../assets/icons/tg.svg";
import { ReactComponent as github } from "../../assets/icons/github.svg";

const Container = styled.div`
display: flex;
align-items: center;
position: sticky;
top: 0;
background-color: #fff;
height: var(--navbar-height);
box-shadow: var(--shadow);
padding: 0 25px;
.active{
    font-weight: bold;
}
`

const Link = styled(NavLink)`
color: var(--color);
text-decoration: none;
font-size: 16px;
`

const TitleLink = styled(NavLink)`
color: var(--color);
text-decoration: none;
margin-right: 27px;
font-size: 26px;
width: calc( var(--sidebar-width) - 28px);
border-right: var(--border);
`

const List = styled.div`
display: flex;
gap: 20px;
align-items: center;
`

const Wrapper = styled.div`
display: flex;
width: 100%;
`


const Contact = styled.div`
display: flex;
align-items: center;
gap: 5px;
margin-left: auto;
`

Contact.UserName = styled.p`
font-size: 18px;
color: var(--color);
margin-right: 10px;
`
Contact.Telegram = styled(tg)`
width: 25px;
height: 25px;
opacity: 0.5;
:hover{
    opacity:1;
}
` 
Contact.GitHub = styled(github)`
width: 25px;
height: 25px;
opacity:0.5;
:hover{
    opacity: 1;
}
` 


export {Container, Link, Contact, TitleLink, Wrapper, List};