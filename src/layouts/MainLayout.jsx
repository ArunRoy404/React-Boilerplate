import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <>
            <header />
            <Outlet />
            <footer />
        </>
    );
};

export default MainLayout;