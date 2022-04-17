import styled from "styled-components";
import { deviceBreakPoints, size } from "../../static/breakpoints";

export const ResponsiveWidth = styled("div")`
    @media ${deviceBreakPoints.tablet} { 
        width: 40%;
    }

    @media (max-width: ${size.mobileL}) {
        max-width: 100%;
    }
`;

export const ResponsiveWidthWrapper = styled(ResponsiveWidth)`
    // @media (max-width: ${size.tablet}) { 
    //     margin-top: ($spacer * 2.5) !important;
    //     margin-bottom: ($spacer * 2.5) !important;
    // }

    @media ${deviceBreakPoints.tablet} { 
        margin-top: ($spacer * 5.5) !important;
        margin-bottom: ($spacer * 5.5) !important;
    }
`;