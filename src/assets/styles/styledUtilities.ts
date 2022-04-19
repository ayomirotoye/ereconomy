import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
text-decoration:none;
color: ${props => props.theme.lightMode.secondaryColor} !important;
font-weight: 900
`