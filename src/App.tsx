import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import PersonalAccount from 'modules/onboarding/personal/personal-account';
import AuthLayout from 'modules/shared/AuthLayout';
import Welcome from 'modules/welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import theme from 'theme';
import 'App.css';
import BusinessAccount from 'modules/onboarding/business/business-account';
import Broker from 'modules/onboarding/business/broker';
import Lender from 'modules/onboarding/business/lender';
import Carrier from 'modules/onboarding/business/carrier';
import 'react-toastify/dist/ReactToastify.css';
import BrowserExtension from 'modules/browserExtension';
import 'App.css';
import DashboardLayout from 'modules/shared/DashboardLayout';
import Dashboard from 'modules/dashboard';
import Payment from 'modules/Payment';
import Transactions from 'modules/transactions';
import Login from 'modules/login';
import ForgotPassword from 'modules/forgot-password';
import ResetCode from 'modules/reset-code';
import ChangePassword from 'modules/change-password';


import Statements from 'modules/transactions/statements';
import ProtectedRoute from 'modules/onboarding/components/ProtectedRoute';
import Heale from 'modules/heale';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-reset-code" element={<ResetCode />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="personal" element={<PersonalAccount />} />
            <Route
              path="extension"
              element={
                <ProtectedRoute>
                  <BrowserExtension />
                </ProtectedRoute>
              }
            />
            <Route path="business" element={<BusinessAccount />} />
            <Route
              path="business/broker"
              element={
                <ProtectedRoute>
                  <Broker />
                </ProtectedRoute>
              }
            />
            <Route
              path="business/lender"
              element={
                <ProtectedRoute>
                  <Lender />
                </ProtectedRoute>
              }
            />
            <Route
              path="business/carrier"
              element={
                <ProtectedRoute>
                  <Carrier />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route element={<DashboardLayout />}>
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/transactions"
              element={
                <ProtectedRoute>
                  <Transactions />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/transactions/statements"
              element={
                <ProtectedRoute>
                  <Statements />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/payments"
              element={
                <ProtectedRoute>
                  <Payment />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/heale"
              element={
                <ProtectedRoute>
                  <Heale />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
