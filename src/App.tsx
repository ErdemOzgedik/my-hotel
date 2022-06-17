import React from "react";
import "./App.scss";

import Card from "./components/Card/Card";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  return (
    <div className="app">
      {/* Router ekle */}

      <Dropdown />

      <div className="card__list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div>Pagination</div>
      {/* pagination */}
    </div>
  );
}

export default App;
