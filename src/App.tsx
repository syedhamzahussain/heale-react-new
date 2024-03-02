import { ChakraProvider } from "@chakra-ui/react";
import AuthLayout from "components/AuthLayout";
import PersonalAccount from "pages/personal-account";
import Welcome from "pages/welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "theme";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="personal" element={<PersonalAccount />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
