import { Button } from "react-bootstrap";
import styled from "styled-components";

export const StyledButton = styled(Button).attrs((props: any) => ({
  color: props?.color ? (props.color) : "#ffffff",
  backgroundcolor: props?.backgroundcolor
}))`
  background: ${(p) => p.backgroundcolor || p.theme.lightMode.primaryColor};
  color: ${(p) => (p.color ?? p.theme.lightMode.primaryColor)};
  font-size: ${(p) => p.fontSize ? p.fontSize : "1em"};;
  font-weight: 700;
  width:${(p) => p.width ? p.width : "100%"};
  border: 2px solid ${(p) => (p.color ?? p.theme.lightMode.primaryColor)};
  border-radius:  ${(p) => (p.borderRadius ? p.borderRadius : "0.5em")};;
  margin-top: ${(p) => (p.marginTop ? p.marginTop : "0.625rem")};
  border-radius:  ${(p) => (p.borderRadius ? p.borderRadius : "0.5em")};;
  padding: ${(p) => (p.padding ? p.padding : "5px 10px")};
  cursor: pointer;
  vertical-align: middle;
  margin-top: ${(p) => (p.marginTop ? p.marginTop : "0.625rem")};
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid ${props => props.theme.lightMode.secondaryColor};
    background-color: ${props => props.theme.lightMode.secondaryColor};
  }
`;

// export const OutlinedButton = styled(Button)`
//   background: #fff;
//   color: ${(p) => (p.color ?? p.theme.lightMode.primaryColor)};
//   font-size: ${(p) => p.fontSize ? p.fontSize : "1em"};;
//   font-weight: 700;
//   width:${(p) => p.width ? p.width : "100%"};
//   border: 2px solid ${(p) => (p.color ?? p.theme.lightMode.primaryColor)};
//   border-radius:  ${(p) => (p.borderRadius ? p.borderRadius : "0.5em")};;
//   padding: ${(p) => (p.padding ? p.padding : "5px 10px")};
//   cursor: pointer;
//   margin-top: ${(p) => (p.marginTop ? p.marginTop : "0.625rem")};
//   transition: all 0.3s ease-in-out;

//   &:hover,
//   &:active,
//   &:focus {
//     color: #fff;
//     border: 1px solid ${props => props.theme.lightMode.secondaryColor};
//     background-color: ${props => props.theme.lightMode.secondaryColor};
//   }
// `;

export const FormTitle = styled("h6")`
  color: ${props => props.theme.lightMode.secondaryColor};
  font-weight: 700;
  font-size: 1rem;
`;