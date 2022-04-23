import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import("../pages/home"));
const Register = lazy(() => import("../pages/register/register"));

const CommonRoutes = () => {
    return (
        <Suspense fallback={<>Loading</>}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </Suspense>
    )
}

export default CommonRoutes;