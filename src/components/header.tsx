import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Brand from "../components/brand";
import LoginModal from "../components/modals/loginModal";
import RegisterModal from "../components/modals/registerModal";
import {
    CustomNavLinkSmall,
} from "../assets/styles/header";
import { atomLoginState } from "../state/atoms/authState/userLogin";
import { useRecoilState, useRecoilValue } from "recoil";
import { atomLoginModalState } from "../state/atoms/modalState";
import { StyledButton } from "../assets/styles/common";
import { LoginIcon } from "../assets/icons/LoginIcon";

const Header = ({ isVisible = true }: any) => {
    const MenuItem = () => {
        const loginState = useRecoilValue(atomLoginState);
        const [loginModalState, setLoginModalState] = useRecoilState(atomLoginModalState);
        const checkIfUserIsLoggedIn = () => {
            if (!loginState.isLoggedIn) {
                console.log("User:::", loginState)
                setLoginModalState({ isOpen: true });
            } else {
                //CLOSE MODAL
            }
        };

        return (
            <>
                <Nav className="mx-auto">
                    <LoginModal />
                    <RegisterModal />
                    <CustomNavLinkSmall href="/about">About us</CustomNavLinkSmall>
                    <CustomNavLinkSmall href="/contact">Contact</CustomNavLinkSmall>
                    <CustomNavLinkSmall href="/contact">Team</CustomNavLinkSmall>
                </Nav>
                <Nav>
                    <StyledButton onClick={checkIfUserIsLoggedIn}> <LoginIcon />Start</StyledButton>
                </Nav>
            </>
        );
    };

    return (
        <>
            {isVisible ?
                <Navbar bg="white" expand={"sm"} fixed="top">
                    <Container>
                        <Navbar.Brand href="#"><Brand /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="appNavbar" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <MenuItem />
                        </Navbar.Collapse>
                        <Navbar.Offcanvas
                            id="appNavbar"
                            aria-labelledby="appNavbarLabel"
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="appNavbarLabel"><Brand /></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <MenuItem />
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
                : []
            }
        </>
    );
};

export default (Header);
