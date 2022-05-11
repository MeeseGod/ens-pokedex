import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import EnglishPokemon from "./components/EnglishPokemon"
import JapanesePokemon from "./components/JapanesePokemon"


export default function App(){
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/japanese" exact element={<JapanesePokemon/>} />
          <Route path="/english" exact element={<EnglishPokemon/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
