import { Row, Col, Container } from "react-bootstrap";
import { useTheme } from "styled-components";
import { DeveloperIcon } from "../../assets/icons/DeveloperIcon";
import IconSwitcher from "../../assets/icons/IconSwitcher";
import { SvgIcon } from "../../assets/icons/SvgIcon";
import { ContentWrapper, LeftAlignedH6, Content, ButtonWrapper } from "../../styles/contentBlock";
import { Span } from "../../styles/header";
import { ContentBlockProps } from "../../types/interfaces";
import { Button } from "../buttons/button";

const RightBlock = function ({
    title, content, button, id
}: ContentBlockProps) {
    const theme = useTheme();

    return (
        <Container>
            <Row justify="space-between" align="middle" id={id}>
                <Col>
                    <ContentWrapper>
                        <LeftAlignedH6>{(title)}</LeftAlignedH6>
                        <Content>{(content)}</Content>
                        <ButtonWrapper>
                            {typeof button === "object" &&
                                button.map((item: any, id: number) => {
                                    return (
                                        <Button
                                            key={id}
                                            color={item.color ?? Object.assign(theme).lightMode?.primaryColor}
                                            fixedWidth={true}
                                        >
                                            {item.svgIcon == null ? (
                                                <>
                                                    <SvgIcon
                                                        src={item.icon}
                                                        className={item.className} />
                                                    {(item.title)}
                                                </>
                                            ) : (
                                                <>
                                                    <IconSwitcher
                                                        strokeWidth={"10"}
                                                        icon_type={item.svgIcon}
                                                        icon_class={item.iconClass} /> <Span color={Object.assign(theme).lightMode?.[item.textColor]}>{(item.title)}</Span>
                                                </>
                                            )}
                                        </Button>
                                    );
                                })}
                        </ButtonWrapper>
                    </ContentWrapper>
                </Col>
                <Col>
                    <DeveloperIcon width="100%" height="100%" />
                </Col>
            </Row>
        </Container>
    );
};

export default ((RightBlock));
