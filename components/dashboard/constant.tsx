import { CardIcon } from "../../assets/icons/CardIcon";
import { EyeIcon } from "../../assets/icons/EyeIcon";

interface cardInfo {
    title: string;
    key: string;
    value: string;
    percentageChange: number;
    btn: {
        btnOutlineColor: string;
        btnText: string;
        btnIcon: any;
        btnWidth: any;
        action: string;
    }
    isProcessing: string;
    btnAction: string;
    cardBg: string;
    breakpoints: any;

}


export const dashboardCards: Array<cardInfo> = [
    {
        title: "Portfolio",
        key: "portfolio",
        value: "0",
        percentageChange: 0,
        btn: {
            btnOutlineColor: "",
            btnText: "View",
            btnIcon: <CardIcon/>,
            btnWidth: "25%",
            action: "VIEW_PORTFOLIOS"
        },
        isProcessing: "",
        btnAction: "",
        cardBg: "",
        breakpoints: {
            xs: "12", sm: "12", md: "6",
        }
    },
    {
        title: "Main Account",
        key: "mainAccount",
        value: "0",
        percentageChange: 0,
        btn: {
            btnOutlineColor: "",
            btnText: "Fund",
            btnIcon: <EyeIcon />,
            btnWidth: "50%",
            action: "FUND_ACCOUNT"
        },
        isProcessing: "",
        btnAction: "",
        cardBg: "",
        breakpoints: {
            xs: "12", sm: "12", md: "3",
        }
    },
    {
        title: "Earning",
        key: "earnings",
        value: "0",
        percentageChange: 0,
        btn: {
            btnOutlineColor: "",
            btnText: "View",
            btnIcon: <EyeIcon />,
            btnWidth: "50%",
            action: "VIEW_EARNINGS"
        },
        isProcessing: "",
        btnAction: "",
        cardBg: "",
        breakpoints: {
            xs: "12", sm: "12", md: "3",
        }
    },

]
