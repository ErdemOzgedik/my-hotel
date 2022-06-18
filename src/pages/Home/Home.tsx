import React, { useEffect, useState } from "react";
import "./Home.scss";
import Card from "../../components/Card/Card";
import Dropdown from "../../components/Dropdown/Dropdown";
import Modal from "../../components/Modal/Modal";
import Navigator from "../../components/Navigator/Navigator";
import { useDispatch, useSelector } from "react-redux";
import { VscAdd } from "react-icons/vsc";
import { getHotelsAsync } from "../../redux/hotelSlice";
import { RootState } from "../../redux/store";
import { Hotel } from "../../types/model";
import { useNavigate } from "react-router-dom";
import NoFound from "../../components/NoFound/NoFound";

function Home() {
  const [isModalOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedHotel, setSelectedHotel] = useState<Hotel>();
  const state = useSelector((state: RootState) => state.hotels);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/create");
  };

  const handleDelete = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const targetId = e.currentTarget.dataset.id;

    if (targetId) {
      setSelectedHotel(
        state.hotels.find((hotel) => hotel.id === parseInt(targetId))
      );

      toggleModal();
    }
  };

  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  useEffect(() => {
    state.hotels.length === 0 && dispatch(getHotelsAsync());
  }, [dispatch, state.hotels.length]);

  return (
    <div className="home">
      {selectedHotel && isModalOpen && (
        <Modal hotel={selectedHotel} toggleModal={toggleModal} />
      )}
      <div className="home__header">
        <Navigator
          title="Add Hotel"
          icon={<VscAdd />}
          handleNavigate={handleNavigate}
        />
        {state.hotels.length > 0 && <Dropdown />}
      </div>
      <div className="card__list">
        {state.hotels.length === 0 && <NoFound />}
        {state.hotels.map((hotel) => (
          <Card key={hotel.id} hotel={hotel} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default Home;
