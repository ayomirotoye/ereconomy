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

export const DynamicP = styled.p.attrs((props: any) => ({
    fontWeight: props.fontWeight,
    fontSize: props.fontSize
}))`
display: inline-block;
font-weight:${props => props.fontWeight};
font-size:${props => props.fontSize}
`

export const StyledSvgIconWithBg= styled.div.attrs((props: any) => ({
    color: props?.color ? (props.color) : rgbToRgba(props.theme.lightMode.secondaryColor, 0.1),
}))`
background-color: ${props=>props.color};
border-radius: 25px ;
width: 50px;
height: 50px;
padding: 12px 12px;
vertical-align: middle;
margin: 8px;
vertical-align: center;
z-index:1000;
`