import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/authentication/login/_page";
import { Offcanvas, Ripple, Dropdown, initTWE, Collapse } from "tw-elements";
import SignUp from "./pages/authentication/signup/_page";
import ConfirmOtp from "./pages/authentication/confirm-otp/_page";
import JobsAndServices from "./pages/customer/JobsAndServices/_page";
import CustomerLayout from "./pages/_layouts/customer/_component";
import ClientLayout from "./pages/_layouts/clients/_component";
import CustomerDashboard from "./pages/customer/Dashboard/_page";
import ClientDashboard from "./pages/clients/Dashboard/_page";
import JobsAndServiceDetails from "./pages/customer/JobsAndServiceDetails/_page";
import HomePage from "./pages/homepage/_page";

function App() {
  React.useEffect(() => {
    initTWE({ Offcanvas, Ripple, Dropdown, Collapse });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirm-otp" element={<ConfirmOtp />} />

          <Route path="/customer" element={<CustomerLayout />}>
            <Route path="dashboard" element={<CustomerDashboard />} />
            <Route path="jobs&services" element={<JobsAndServices />} />
            <Route
              path="jobs&serviceDetails"
              element={<JobsAndServiceDetails />}
            />
          </Route>

          <Route path="/client" element={<ClientLayout />}>
            <Route path="dashboard" element={<ClientDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
