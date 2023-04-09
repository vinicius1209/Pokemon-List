import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import App from "./App";

import Home from "@pages/Home";
import PokemonList from "@pages/PokemonList";
// import Search from "./pages/Search";

import "./index.css";
import List from "./components/List";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon-list" element={<PokemonList />} />
          <Route path="/list" element={<List />} />
          {/* <Route path="search" element={<Search />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
