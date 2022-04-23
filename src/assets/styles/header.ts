import { Nav } from "react-bootstrap";
import styled from "styled-components";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(Nav.Link)`
  font-size: 1.2rem;
  color: ${(props=> props.theme.lightMode.secondaryColor)};
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${props=>props.color}

  // &:hover,
  // &:active,
  // &:focus {
  //   color: ${(props=> props.theme.lightMode.secondaryColor)};
  //   text-underline-position: under;
  //   text-decoration: ${(props=> props.theme.lightMode.secondaryColor)} underline;
  // }
`;