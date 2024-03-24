import { ChakraProvider } from "@chakra-ui/react";
import PersonalAccount from "modules/onboarding/personal/personal-account";
import AuthLayout from "modules/shared/AuthLayout";
import Welcome from "modules/welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "theme";
import "App.css"
import BusinessAccount from "modules/onboarding/business/business-account";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="personal" element={<PersonalAccount />} />
            <Route path="business" element={<BusinessAccount />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
