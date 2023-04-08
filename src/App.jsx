import { Outlet } from "react-router-dom";
import Navbar from "@components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

import store from "./store/store";
import { Provider } from "react-redux";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ChakraProvider>
          <Navbar />
          <Outlet></Outlet>
        </ChakraProvider>
      </Provider>
    </div>
  );
}

export default App;
