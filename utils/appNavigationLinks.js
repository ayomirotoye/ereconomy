import React from "react";
import { TargetSavingIcon } from "../assets/icons/TargetSavingIcon"
import { UserIcon } from "../assets/icons/UserIcon"

export const appNavigationLinks = {
    home: ["/home", "/"],
    features: "/features",
    makeOrder: "/order/create",
    dashboard: "/dashboard"
}

export const dashboardLinks = [
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
]