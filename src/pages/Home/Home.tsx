import React, { useEffect, useState } from "react";
import "./Home.scss";
import Card from "../../components/Card/Card";
import Dropdown from "../../components/Dropdown/Dropdown";
import NewOne from "../../components/NewOne/NewOne";
import Modal from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getHotelsAsync } from "../../redux/hotelSlice";
import { RootState } from "../../redux/store";
import { Hotel } from "../../types/model";

function Home() {
  const [isModalOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedHotel, setSelectedHotel] = useState<Hotel>();
  const state = useSelector((state: RootState) => state.hotels);
  const dispatch = useDispatch();

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
    dispatch(getHotelsAsync());
  }, [dispatch]);

  return (
    <div className="home">
      {selectedHotel && isModalOpen && (
        <Modal hotel={selectedHotel} toggleModal={toggleModal} />
      )}
      <div className="home__header">
        <NewOne />
        <Dropdown />
      </div>
      <div className="card__list">
        {state.hotels.map((hotel) => (
          <Card key={hotel.id} hotel={hotel} handleDelete={handleDelete} />
        ))}
      </div>
      <div>Pagination</div>
    </div>
  );
}

export default Home;
