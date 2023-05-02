import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../components/ui/Container";
import Sidebar from "../features/dashboard/components/layout/Sidebar";
import Topbar from "../features/dashboard/components/layout/Topbar";

const DashboardLayout = () => {
    return (
        <div className="min-h-screen relative text-gray-800">
            <div className="h-14 sticky top-0">
                <Topbar />
            </div>
            <div className="flex">
                <div className="hidden sm:block border-r border-gray-300 drop-shadow-sm sticky top-14 h-[calc(100vh-56px)] overflow-y-auto">
                    <Sidebar />
                </div>
                <div className="overflow-x-auto flex-1">
                    <Container>
                        <Outlet />
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
