import { Link } from "react-router-dom";
import styled from "styled-components";
import { activeLink } from "./css/dynamicStyles";

export const SidebarContainer = styled.div`
    flex: 1;
    height: calc(100vh);
    //background-color: ${(props => props.theme.lightMode.primaryColor)};
    position: sticky;
    top: 50px;
    width: 20vw;
    padding: 20px
    `;

export const SidebarItem = styled(Link)`
    font-weight: 900;
    display: block;
    color: white !important;
    margin: 20px 0;
    text-decoration: none;
    width: 80%
    ${p => p.className === "active-link" ? activeLink : ""}

    &:hover{
        border: 1px solid ${props => props.theme.lightMode.accentColor};
        border-radius: 15px 50px;
        padding: 10px;
        color: #fff !important;
    }

    &:active,
    &:focus {
        color: #fff;
        background-color: ${props => props.theme.lightMode.secondaryColor};
        border-radius: 15px 50px;
        padding: 10px;
    }
    `;