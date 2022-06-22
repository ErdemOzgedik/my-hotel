import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getHotelsAsync } from "./redux/hotelSlice";

const Home = lazy(() => import("./pages/Home/Home"));
const Create = lazy(() => import("./pages/Create/Create"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotelsAsync());
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="create" element={<Create />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
