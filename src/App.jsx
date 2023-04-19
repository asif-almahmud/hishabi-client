import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Welcome from "./features/auth/pages/Welcome";
import AddTransaction from "./features/dashboard/pages/AddTransaction";
import Dashboard from "./features/dashboard/pages/Dashboard";
import History from "./features/dashboard/pages/History";
import Settings from "./features/dashboard/pages/Settings";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Navigate to="welcome" replace={true} />}
            />
            <Route path="welcome" element={<Welcome />} />
            <Route path="dashboard" element={<DashboardLayout />}>
                <Route
                    index
                    element={<Navigate to="dashboard" replace={true} />}
                />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="history" element={<History />} />
                <Route path="add-transaction" element={<AddTransaction />} />
                <Route path="settings" element={<Settings />} />
            </Route>
        </Routes>
    );
}

export default App;
