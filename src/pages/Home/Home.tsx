import React from "react";
import "./Home.scss";
import Card from "../../components/Card/Card";
import Dropdown from "../../components/Dropdown/Dropdown";

function Home() {
  return (
    <div className="home">
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

export default Home;
