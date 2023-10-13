import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
const root = createRoot(document.getElementById("app"));
import departmentService from "./department/domain/service/TestDepartmentService";
root.render(<App />);

// import Store from './example/Store';
