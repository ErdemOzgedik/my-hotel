import React from "react";
import "./Home.scss";
import Card from "../../components/Card/Card";
import Dropdown from "../../components/Dropdown/Dropdown";
import NewOne from "../../components/NewOne/NewOne";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <NewOne />
        <Dropdown />
      </div>
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
