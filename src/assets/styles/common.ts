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
//   max-width: 180px;
  transition: all 0.3s ease-in-out;
  // box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid ${props => props.theme.lightMode.secondaryColor};
    background-color: ${props => props.theme.lightMode.secondaryColor};
  }
`;