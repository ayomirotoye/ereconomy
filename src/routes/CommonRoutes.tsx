import { Routes, Route } from "react-router";
import Home from "../pages/home";

const CommonRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    )
}

export default CommonRoutes;