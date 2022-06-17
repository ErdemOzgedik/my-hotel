import React from "react";
import "./App.scss";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="app">
      {/* filterComponents */}
      <div>FilterRRR</div>

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
