import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { Card, Col, Dropdown, Row, Stack } from "react-bootstrap";
import { useTheme } from "styled-components";
import { HamburgerMenuIcon } from "../assets/icons/HamburgerMenuIcon";
import { NotificationIcon } from "../assets/icons/NotificationIcon";
import { SearchIcon } from "../assets/icons/SearchIcon";
import Brand from "../components/brand";
import LoadingButton from "../components/buttons/loadingButton";
import PageWrapper from "../components/containers/pageWrapper";
import { dashboardCards } from "../components/dashboard/constant";
import { CustomMenu } from "../components/dashboard/customMenu";
import { CustomToggle } from "../components/dashboard/customToggle";
import FundAccountModal from "../components/modals/fundAccountModal";
import PercentageChange from "../components/texts/percentageChange";
import { useLoggedInUserDetails, useMediaQueryWrapper } from "../hooks/components";
import { useAppDispatch } from "../hooks/state";
import { toggleCardFundingModal } from "../state/reducers/fundingReducer";
import { CardWithStyledBackground } from "../styles/appCard";
import { DashboardWrapper } from "../styles/contentBlock";
import { DynamicP, StyledSvgIconWithBg } from "../styles/htmlElements";
import { SidebarContainer, SidebarItem } from "../styles/sidebar";
import { appNavigationLinks, dashboardLinks } from "../utils/appNavigationLinks";
import { isNullOrUndefined, rgbToRgba } from "../utils/helpers";


const Dashboard = () => {
    const loggedInUser = useLoggedInUserDetails();
    const theme = useTheme();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { isSmallScreen, isMediumScreen } = useMediaQueryWrapper();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [activeMenu, setActiveMenu] = useState("");
    const [, setShow] = useState(false);
    const [accountInfoCards, setAccountInfoCards] = useState<JSX.Element[]>([]);
    const [accountInfo, setAccountInfo] = useState({
        "portfolio": {
            percentageChange: "0",
            currentValue: 0,
            isLoading: false
        },
        "mainAccount": {
            percentageChange: "0",
            currentValue: 0,
            isLoading: false
        },
        "earnings": {
            percentageChange: "0",
            currentValue: 0,
            isLoading: false
        }
    });
    const [otherDashboardIcons, setOtherDashboardIcons] = useState<any>([]);
    const [menus] = useState(dashboardLinks);

    const doLogout = () => {
        router.push(appNavigationLinks.home[1]);
    }

    const toggleShow = () => setShow((s) => !s);


    const handleLinkClick = (e: any) => {
        e.preventDefault();
        setActiveMenu(String(e.target.outerText).toLowerCase());
    }

    const getAccountBalance = () => {
        const arrayOfAccounts = loggedInUser?.accounts;
        console.log("arrayOfAccounts:::", loggedInUser);

        let sumOfBalances = 0;
        arrayOfAccounts?.forEach((element: { balance: number; }) => {
            sumOfBalances += element.balance;
        });
        let ch = { ...accountInfo.mainAccount, currentValue: sumOfBalances };
        console.log("chLLL::", ch);
        return {mainAccount:ch};
        // setAccountInfo({
        //     ...accountInfo,
        //     mainAccount: ch
        // })
    }


    const switchAction = (action: any) => {
        switch (action) {
            case "FUND_ACCOUNT":
                dispatch(toggleCardFundingModal({ isfundAccountModalOpen: true }));
                break;
            case "VIEW_PORTFOLIO":
                break;
            case "VIEW_EARNINGS":
                break;
        }
    }

    useMemo(() => {
        const accountDetails = getAccountBalance();
        let ac = dashboardCards.map((items: any, index: number) => {
            let keyString = items.key;
            const f = Object.assign({}, accountInfo[keyString as keyof typeof accountInfo]);
            const g = Object.assign({}, accountDetails[keyString as keyof typeof accountDetails]);
            console.log("accc::", g)
            console.log("akeyStringccc::", keyString)
            return <Col
                key={`dashboardcards_${index}`}
                className="my-2"
                xs={items.breakpoints.xs}
                sm={items.breakpoints.sm}
                md={items.breakpoints.md}>
                <CardWithStyledBackground color={Object.assign(theme).lightMode.accentColor1}>
                    <Card.Body>
                        <span className="fw-bold">
                            {items.title}
                        </span>
                        <div className="fw-semibold">
                            {g.currentValue ?? 0}
                        </div>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between px-1">
                        <StyledSvgIconWithBg height={"40px"} width={"40px"} padding="-10px 2px" margin="10px 5px">
                            <PercentageChange text={f.percentageChange} />
                        </StyledSvgIconWithBg>
                        <LoadingButton
                            width={items.btn.btnWidth}
                            onClick={() => switchAction(items.btn.action)}
                            processing={f.isLoading}
                            disabled={f.isLoading}
                            buttonType="outlined"
                            outlineColor={Object.assign(theme).lightMode.primaryColor}
                            icon={items.btn.btnIcon}
                            buttonText={items.btn.btnText}
                        />
                    </Card.Footer>
                </CardWithStyledBackground>
            </Col>
        })
        setAccountInfoCards(ac);
    }, [accountInfo])


    useEffect(() => {
        setOtherDashboardIcons(
            <Stack direction={isSmallScreen ? "vertical" : "horizontal"} gap={2}>
                <StyledSvgIconWithBg><SearchIcon strokeWidth="20" height={600} width={600} fill="black" /></StyledSvgIconWithBg>
                <StyledSvgIconWithBg><NotificationIcon height={700} width={700} fill="black" /></StyledSvgIconWithBg>
                <div className={isSmallScreen ? "hr" : "vr"} />
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
                            }}>{loggedInUser.firstName}</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                <svg className="icons-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                Profile</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                <svg className="icons-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                                Security</Dropdown.Item>
                            <Dropdown.Item onClick={doLogout}>
                                <svg className="icons-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Stack>
        );

    }, [isSmallScreen])

    // useEffect(() => {
    //     if (loggedInUser !== {} && !isNullOrUndefined(loggedInUser)) {
    //         getAccountBalance();
    //     }
    // }, [loggedInUser])


    return (
        <PageWrapper isHeaderVisible={false}>
            <FundAccountModal />
            <DashboardWrapper color="rgba(73,146,106, 0.8)" className="d-flex">
                <SidebarContainer className="d-flex flex-column d-md-block d-lg-block justify-content-start align-items-center cursor-pointer">
                    <Brand />
                    {menus.map((item: any, index: number) => {
                        return <SidebarItem
                            onClick={handleLinkClick}
                            key={index}
                            className={item.title.toLowerCase() === activeMenu ? "active-link" : ""}>
                            {isSmallScreen || isMediumScreen ? item.icon : item.title}</SidebarItem>
                    })}
                </SidebarContainer>
                <div style={{
                    width: "80vw"
                }}>
                    <div style={{
                        // height:"95.6vh",
                        borderRadius: "16px",
                        padding: "15px 15px 30px 15px"
                    }} className="mt-2 me-3  bg-white">
                        <div>
                            <div className="d-flex flex-row justify-content-between">
                                <div className="text-center"><DynamicP fontSize={"12px"} fontWeight={400}>Welcome, </DynamicP>
                                    <DynamicP fontSize={"12px"} fontWeight={900}> {loggedInUser.fullName}</DynamicP>
                                </div>
                                <div className="d-none d-md-block">
                                    {otherDashboardIcons}
                                </div>
                                <div className="d-block d-md-none">
                                    <div className="d-flex justify-content-center align-content-center">
                                        <StyledSvgIconWithBg onClick={toggleShow} color={rgbToRgba(Object.assign(theme).lightMode.primaryColor, 0.1)}>
                                            <Dropdown>
                                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                                    <HamburgerMenuIcon className="" height={175} width={175} fill="black" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu as={CustomMenu} flip={true}>
                                                    {otherDashboardIcons}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </StyledSvgIconWithBg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-2">
                            <Row>
                                {accountInfoCards}
                            </Row>

                        </div>

                    </div>

                </div>

            </DashboardWrapper>
        </PageWrapper >
    )

}
export default Dashboard;