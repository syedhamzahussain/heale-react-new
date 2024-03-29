import { ChakraProvider } from "@chakra-ui/react";
import PersonalAccount from "modules/onboarding/personal/personal-account";
import AuthLayout from "modules/shared/AuthLayout";
import Welcome from "modules/welcome";
import BrowserExtension from "modules/browserExtension";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "theme";
import "App.css"
import BusinessAccount from "modules/onboarding/business/business-account";
import Broker from "modules/onboarding/business/broker";
import Lender from "modules/onboarding/business/lender";
import Carrier from "modules/onboarding/business/carrier";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Welcome />} />
            <Route path="personal" element={<PersonalAccount />} />
            <Route path="extension" element={<BrowserExtension />} />
            <Route path="business" element={<BusinessAccount />} />
            <Route path="business/broker" element={<Broker />} />
            <Route path="business/lender" element={<Lender />} />
            <Route path="business/carrier" element={<Carrier />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
