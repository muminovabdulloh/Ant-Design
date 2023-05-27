import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Container = styled.div`
width: var(--sidebar-width);
display: flex;
flex-direction: column;
padding: 0 25px;
box-shadow: var(--shadow);
.active{
    transform: translateX(30px);
    font-weight: bold;
}
`
const Wrapper = styled.div`
display: flex;
width: 100%;
height: calc(100vh - var(--navbar-height));
overflow: auto ;
`

const Body = styled.div`
width: 100%;
overflow-y: scroll;
margin: 30px;
padding: 20px;
border-radius: 8px;
box-shadow: var(--shadow);
`

const Link = styled(NavLink)`
text-decoration: none;
transition: 0.2s all linear;
margin-top: 20px;
`

export {Container, Body, Wrapper, Link};