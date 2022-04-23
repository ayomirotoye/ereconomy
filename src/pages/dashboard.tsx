import React from "react";
import { useEffect, useState } from "react";
import { Button, Col, Dropdown, FormControl, Offcanvas, Row, Stack } from "react-bootstrap";
import { useTheme } from "styled-components";
import { HamburgerMenuIcon } from "../assets/icons/HamburgerMenuIcon";
import { NotificationIcon } from "../assets/icons/NotificationIcon";
import { SearchIcon } from "../assets/icons/SearchIcon";
import { TargetSavingIcon } from "../assets/icons/TargetSavingIcon";
import { UserIcon } from "../assets/icons/UserIcon";
import { DashboardWrapper } from "../assets/styles/contentBlock";
import { DynamicP, StyledSvgIconWithBg } from "../assets/styles/htmlElements";
import { SidebarContainer, SidebarItem } from "../assets/styles/sidebar";
import Brand from "../components/brand";
import PageWrapper from "../containers/pageWrapper";
import { useMediaQueryWrapper } from "../hooks/customHooks"
import { rgbToRgba } from "../utils/helpers";


const CustomToggle = React.forwardRef(({ children, onClick }: any, ref: any) => {
    return (
        <div
            ref={ref}
            style={{
                height: "20px"
            }}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </div>

    )
});

const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }: any, ref: any) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child: any) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);

const Dashboard = (props: any) => {
    const theme = useTheme();
    const [activeMenu, setActiveMenu] = useState("");
    const [show, setShow] = useState(false);
    const {isSmallScreen, isMediumScreen} = useMediaQueryWrapper();

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    const [otherDashboardIcons, setOtherDashboardIcons] = useState([
        <Stack direction={isSmallScreen ? "horizontal": "vertical"} gap={2}>
            <StyledSvgIconWithBg><SearchIcon strokeWidth="20" height={600} width={600} fill="black" /></StyledSvgIconWithBg>
            <StyledSvgIconWithBg><NotificationIcon height={700} width={700} fill="black" /></StyledSvgIconWithBg>
            <div className="vr" />
            <div className="d-flex">
                <StyledSvgIconWithBg color={rgbToRgba(Object.assign(theme).lightMode.primaryColor, 0.1)}>
                    <NotificationIcon height={700} width={700} fill="black" />
                </StyledSvgIconWithBg>
                <Dropdown style={{
                    marginLeft: "-16px",
                    marginTop: "14px",
                }}>
                    <Dropdown.Toggle style={{
                        borderRadius: "0px 15px 15px 0px"
                    }} className={"bg-secondary opacity-2"} id="dropdown-basic">
                        <span style={{
                            zIndex: 1000,
                            color: "#ffffff"
                        }}>Ayomide</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </Stack>
    ]);
    const [menus] = useState([
        {
            title: "Home",
            route: "/home",
            active: false,
            icon: <UserIcon className="icons-svg d-flex justify-content-center" fill="white" />
        }, {
            title: "Savings",
            route: "/savings",
            active: false,
            icon: <TargetSavingIcon className="icons-svg" fill="white" height="300" width="300" />
        }, {
            title: "Investments",
            route: "/investments",
            active: false,
            icon: <UserIcon className="icons-svg" fill="white" />
        }, {
            title: "Earnings",
            route: "/earnings",
            active: false,
            icon: <UserIcon className="icons-svg" fill="white" />
        }, {
            title: "Account",
            route: "/account",
            active: false,
            icon: <UserIcon className="icons-svg" fill="white" />
        },
    ]);

    const handleLinkClick = (e: any) => {
        e.preventDefault();
        setActiveMenu(String(e.target.outerText).toLowerCase());
    }


    return (
        <PageWrapper isHeaderVisible={false}>
            {/* <div style={{
                width: "100vw",
                backgroundColor: "green"
            }}> */}
            <DashboardWrapper className="d-flex">
                <SidebarContainer className="d-flex flex-column d-md-block  d-lg-block justify-content-start align-items-center">
                    <Brand />
                    {menus.map((item, index) => {
                        return <SidebarItem
                            onClick={handleLinkClick}
                            key={index}
                            to={item.route}
                            className={item.title.toLowerCase() === activeMenu ? "active-link" : ""}>
                            {isSmallScreen || isMediumScreen ? item.icon : item.title}</SidebarItem>
                    })}
                </SidebarContainer>
                <div style={{
                    width: "80vw"
                }}>
                    <div style={{
                        height: "95.6vh",
                        borderRadius: "16px",
                        padding: "15px 15px 30px 15px"
                    }} className="mt-2 me-3  bg-white">
                        <div>
                            <div className="d-flex flex-row justify-content-between">
                                <div className=""><DynamicP fontSize={"24px"} fontWeight={900}>Overview</DynamicP></div>
                                <div className="d-none d-md-block">
                                    {otherDashboardIcons}
                                </div>
                                <div className="d-block d-md-none">
                                    <div className="d-flex justify-content-center align-content-center">
                                        <StyledSvgIconWithBg onClick={toggleShow} color={rgbToRgba(Object.assign(theme).lightMode.primaryColor, 0.1)}>
                                            <Dropdown>
                                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                                    <HamburgerMenuIcon className="ms-n1 mt-n1 pt-0.75" height={700} width={700} fill="black" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu as={CustomMenu} flip={true}>
                                                    <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3" active>
                                                        Orange
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </StyledSvgIconWithBg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Row>
                                <Col xs="12" md="6">Portfolio</Col>
                                <Col xs="12" md="2">Main account</Col>
                                <Col xs="12" md="2">Earnings</Col>
                                <Col xs="12" md="2">Investment</Col>
                            </Row>

                        </div>

                    </div>

                </div>

            </DashboardWrapper>
        </PageWrapper >
    )

}
export default Dashboard;