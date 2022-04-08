
import IntroContent from "../content/introContent.json";
import PageWrapper from "../containers/pageWrapper";
import { Row, Col, Container } from "react-bootstrap";
import { DeveloperIcon } from "../assets/icons/DeveloperIcon";
import { LeftAlignedH6, Content } from "../assets/styles/contentBlock";
import { StyledButton } from "../assets/styles/common";
import { DeliveryIcon } from "../assets/icons/DeliveryIcon";
import InfoCard from "../components/infoCard";
import { DepositIcon } from "../assets/icons/DepositIcon";
import { LockFundIcon } from "../assets/icons/LockFundIcon";
import { TargetSavingIcon } from "../assets/icons/TargetSavingIcon";
import { RankIcon } from "../assets/icons/RankIcon";
import { StyledH2, StyledP } from "../assets/styles/htmlElements";
import { PowerButtonIcon } from "../assets/icons/PowerButtonIcon";

export default function Home() {
    return (
        <PageWrapper isHeaderVisible={true}>
            <Container className="h-100 my-5">
                <Row className="my-10">
                    <Col sm="6">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <LeftAlignedH6>{(IntroContent.title)}</LeftAlignedH6>
                            <Content>{(IntroContent.text)}</Content>
                        </div>
                        <div>
                            <StyledButton width="50%" className="text-left"><DeliveryIcon />Create an account</StyledButton>
                        </div>
                    </Col>
                    <Col sm="6" className="d-flex flex-column justify-content-center align-items-center">
                        <DeveloperIcon width="100%" height="100%" />
                    </Col>
                </Row>

            </Container>
            <Container key="how-it-works" className="my-5">
                <div className="d-flex justify-content-center mx-auto my-5">
                    <h2>How to earn</h2>
                </div>
                <Row>
                    <Col sm="12" md="3" className="my-3">
                        <InfoCard title={"Deposit funds"}
                            text={"Build a dedicated savings faster on your terms automatically or manually."}
                            image={<DepositIcon className="info-card-svg"
                                fill={"green"} stroke={"green"} strokeWidth={2} />}
                        />
                    </Col>
                    <Col sm="12" md="3" className="my-3">
                        <InfoCard title={"Lockup funds"}
                            text={"Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit."}
                            image={<LockFundIcon className="info-card-svg" />}
                        />
                    </Col>
                    <Col sm="12" md="3" className="my-3">
                        <InfoCard title={"Savings target"}
                            text={"Reach all your savings goals faster. Save towards multiple goals on your own or with a group."}
                            image={<TargetSavingIcon className="info-card-svg" />}
                        />
                    </Col>
                    <Col sm="12" md="3" className="my-3">
                        <InfoCard title={"Save consistently"}
                            text={"The more you stick to your saving plan. The more rewards you get for being a true saver"}
                            image={<RankIcon className="info-card-svg" />}
                        />
                    </Col>
                </Row>
            </Container>
            <Container className="my-10">
                <Row>
                    <Col sm="6">
                        <div className="d-flex justify-content-center">
                            <img width={"250px"} src={"https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/invest_c3fcc60df0/invest_c3fcc60df0.png"} />
                        </div>
                    </Col>
                    <Col sm="6">
                        <StyledP>Up to 15% Returns </StyledP>
                        <StyledH2>Access investment opportunities</StyledH2>
                        <p>Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities.</p>
                        <StyledButton width="50%" className="text-left"><PowerButtonIcon />Start Investing</StyledButton>
                    </Col>
                </Row>
            </Container>
        </PageWrapper >
    );
}
