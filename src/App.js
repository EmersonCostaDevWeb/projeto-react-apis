import React from "react"
import { GlobalSyle } from './GlobalStyle';
import Router from './Router/Router';
import { GlobalState } from "./Global/GlobalState";
import { ChakraProvider } from "@chakra-ui/react";
import ModalPoke from "./components/modal/modal";



function App() {
  return (
    <>
      <GlobalSyle />
      <GlobalState>
        <ChakraProvider>
          <ModalPoke/>
          <Router />
        </ChakraProvider>
      </GlobalState>
    </>
  );
}

export default App;
