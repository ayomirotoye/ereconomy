import { LogoContainer } from "../styles/brand";

export default function Brand() {
    return (
        <>
            <LogoContainer aria-label="homepage" className="d-none d-lg-block">
                <span className="brand-span text-primary">èrèconomy</span>
            </LogoContainer>
            <LogoContainer aria-label="homepage" className="d-block d-lg-none">
                <span className="brand-span text-primary">ère</span>
            </LogoContainer>
        </>
    );
}
