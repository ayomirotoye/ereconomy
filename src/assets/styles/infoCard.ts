import { Card } from "react-bootstrap";
import styled from "styled-components";


export const StyledCard = styled(Card)`
margin: 0 auto;
margin-bottom: 0px;
border-radius: 20px;
padding: 30px 10px 30px 30px;
`;

export const InfoCardTitle = styled(Card.Title)`
font-size: 20px;
line-height: 25.18px;
margin-top: 25px !important;
max-width: 250px;
font-weight: 700;
`

export const InfoCardText = styled.p`
margin: 18px 0 40px !important;
line-height: 27.2px;
font-size: 12.5px;
max-width: 250px;
min-height: 200px;
`

export const InfoCardImage = styled.div`
max-height: 100px !important;
`