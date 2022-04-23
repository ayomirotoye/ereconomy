import CommonRoutes from "./CommonRoutes";
import ProtectedRoutes from "./ProtectedRoutes";

export const AppRoute = () => {
    return (
        <>
            <CommonRoutes />
            <ProtectedRoutes />
        </>
    )
}

export default AppRoute;