import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Create from "./pages/Create/Create";
import Home from "./pages/Home/Home";
import { getHotelsAsync } from "./redux/hotelSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotelsAsync());
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
