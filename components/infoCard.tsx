import { Button } from "react-bootstrap";
import { useTheme } from "styled-components";
import { ArrowRightIcon } from "../assets/icons/ArrowRightIcon";
import { StyledCard, InfoCardImage, InfoCardTitle, InfoCardText } from "../styles/appCard";

export const InfoCard = ({ title, text, image }: any) => {
    const theme = useTheme();
    return (
        <StyledCard>
            <InfoCardImage className="my-1 h-15">
                {image}
            </InfoCardImage>
            <div>
                <InfoCardTitle>{title}</InfoCardTitle>
                <InfoCardText>
                    {text}
                </InfoCardText>
            </div>
            <div className="d-flex justify-content-center">
                <Button style={{
                    position: "absolute",
                    bottom: "-15px"
                }} variant="primary"><ArrowRightIcon fill={"#ffffff"} /></Button>
            </div>
        </StyledCard>
    );
}

export default InfoCard;