import styled from "styled-components";
import { rgbToRgba } from "../../utils/helpers";

export const StyledP = styled.p`
display: inline-block;
padding: 6px 22px;
border-radius: 40px;
color:${(props => props.theme.lightMode.accentColor)};
background-color: ${(props => rgbToRgba(props.theme.lightMode.secondaryColor, 0.2))};
margin-bottom: 30px;
`

export const StyledH2 = styled.h2`
font-size: 51px;
line-height: 65.1px;
font-weight: 900;
margin: 15px 0
`