import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
// import { authApi } from "./features/auth/api/authApi";
// import { Provider } from "react-redux";
// import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <Provider store={store}> */}
        {/* <ApiProvider api={authApi}> */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
        {/* </ApiProvider> */}
        {/* </Provider> */}
    </React.StrictMode>
);
