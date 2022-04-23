import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';

const Dashboard = lazy(() => import("../pages/dashboard"));

const ProtectedRoutes = () => {
    return (
        <Suspense fallback={<>Loading</>}>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </Suspense>
    )
}

export default ProtectedRoutes;