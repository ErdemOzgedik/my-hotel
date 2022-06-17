import React, { useEffect } from "react";
import "./Home.scss";
import Card from "../../components/Card/Card";
import Dropdown from "../../components/Dropdown/Dropdown";
import NewOne from "../../components/NewOne/NewOne";
import { useDispatch, useSelector } from "react-redux";
import { getHotelsAsync } from "../../redux/hotelSlice";
import { RootState } from "../../redux/store";

function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.hotels);

  useEffect(() => {
    dispatch(getHotelsAsync());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="home__header">
        <NewOne />
        <Dropdown />
      </div>
      <div className="card__list">
        {state.hotels.map((hotel) => (
          <Card key={hotel.id} hotel={hotel} />
        ))}
      </div>

      <div>Pagination</div>
      {/* pagination */}
    </div>
  );
}

export default Home;
