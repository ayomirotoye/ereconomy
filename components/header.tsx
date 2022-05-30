import { Container, Nav, Navbar } from "react-bootstrap";
import Brand from "../components/brand";
import { LoginIcon } from "../assets/icons/LoginIcon";
import { StyledButton } from "../styles/common";
import { CustomNavLinkSmall } from "../styles/header";
import LoginModal from "./modals/loginModal";
import { useAppDispatch, useAppSelector } from "../hooks/state";
import { toggleLoginModal } from "../state/reducers/authReducer";
import ClientOnly from "./clientOnly";

const Header = ({ isVisible = true }: any) => {
    const loginState = useAppSelector(
        (state: any) => state.authReducer?.loginState
    );
    const dispatch = useAppDispatch();
    const MenuItem = () => {

        const checkIfUserIsLoggedIn = () => {
            if (!loginState.isLoggedIn) {
                dispatch(toggleLoginModal({ isLoginModalOpen: true }));
            } else {
                //CLOSE MODAL
            }
        };

        return (
            <>
                <Nav className="mx-auto">
                    <LoginModal />
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
                        <ClientOnly>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <MenuItem />
                            </Navbar.Collapse>
                        </ClientOnly>
                    </Container>
                </Navbar>
                : []
            }
        </>
    );
};

export default (Header);
