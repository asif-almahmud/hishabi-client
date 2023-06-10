import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Welcome from "./features/auth/pages/Welcome";
import AddTransaction from "./features/dashboard/pages/AddTransaction";
import Dashboard from "./features/dashboard/pages/Dashboard";
import History from "./features/dashboard/pages/History";
import Planner from "./features/dashboard/pages/Planner";
import Settings from "./features/dashboard/pages/Settings";
import Trends from "./features/dashboard/pages/Trends";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                // element={<Navigate to="welcome" replace={true} />}
                element={<Navigate to="dashboard" replace={true} />}
            />
            <Route path="welcome" element={<Welcome />} />
            <Route path="dashboard" element={<DashboardLayout />}>
                <Route
                    index
                    element={<Navigate to="dashboard" replace={true} />}
                />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="trends" element={<Trends />} />
                <Route path="history" element={<History />} />
                <Route path="add-transaction" element={<AddTransaction />} />
                <Route path="planner" element={<Planner />} />
                <Route path="settings" element={<Settings />} />
            </Route>
        </Routes>
    );
}

export default App;

// transactions API -> https://my.api.mockaroo.com/transactions_db.json?key=d16c1420
// Try with cURL -> curl -H "X-API-Key: d16c1420" https://my.api.mockaroo.com/transactions_db.json
