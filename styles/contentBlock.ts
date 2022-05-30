import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  position: relative;
  padding: 4rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 8rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const LeftAlignedH6 = styled("h6")`
  text-align: left;
  font-size: 56px;
  line-height: 1.18;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;

export const MainContentContainer = styled.div`
 width: "80vw" !important;
`;

export const DashboardWrapper= styled.div`
width: "100vw";
background-color: ${(p) => (p.color ?? p.theme.lightMode.primaryColor)} !important;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
