import styled from "styled-components";
import { deviceBreakPoints, size } from "../static/breakpoints";

export const ResponsiveWidth = styled("div")`
    @media ${deviceBreakPoints.tablet} { 
        width: 40%;
    }

    @media (max-width: ${size.mobileL}) {
        max-width: 100%;
    }
`;

export const ResponsiveWidthWrapper = styled(ResponsiveWidth)`
    @media (max-width: ${size.mobileL}) { 
        margin-top: 50px !important;
        margin-bottom: 50px !important;
    }

    @media  ${deviceBreakPoints.mobileL} and (max-width:${size.tablet}) { 
        margin-top: 50px !important;
        margin-bottom: 50px !important;
    }

    @media ${deviceBreakPoints.tablet} { 
        margin-top: 50px !important;
        margin-bottom: 50px !important;
    }
`;