import { Button } from "react-bootstrap";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  background: ${(p) => p.color || p.theme.lightMode.primaryColor};
  color: ${(p) => (p.color ? "#fff" : "#fff")};
  font-size: 1rem;
  font-weight: 700;
  width:${(p) => p.width ? p.width : "100%"};
  border: 1px solid #edf3f5;
  border-radius: 1.25em;
  padding: 13px 20px;
  cursor: pointer;
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

export const OutlinedButton = styled(Button)`
  background: #fff;
  color: ${(p) => (p.color ?? p.theme.lightMode.primaryColor)};
  font-size: 1rem;
  font-weight: 700;
  width:${(p) => p.width ? p.width : "100%"};
  border: 2px solid ${(p) => (p.color ?? p.theme.lightMode.primaryColor)};
  border-radius: 1.25em;
  padding: 13px 20px;
  cursor: pointer;
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

export const FormTitle = styled("h6")`
  color: ${props => props.theme.lightMode.secondaryColor};
  font-weight: 700;
  font-size: 1rem;
`;