import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { VscAdd } from "react-icons/vsc";
import { Toaster } from "react-hot-toast";
import "./Home.scss";
import Card from "../../components/Card/Card";
import Dropdown from "../../components/Dropdown/Dropdown";
import Modal from "../../components/Modal/Modal";
import Navigator from "../../components/Navigator/Navigator";
import NoFound from "../../components/NoFound/NoFound";
import Pagination from "../../components/Pagination/Pagination";
import { RootState } from "../../redux/store";
import { Hotel } from "../../types/model";
import { SHOW_COUNT } from "../../types/constants";

function Home() {
  const [isModalOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedHotel, setSelectedHotel] = useState<Hotel>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const state = useSelector((state: RootState) => state.hotels);
  const navigate = useNavigate();
  const pageCount = Math.ceil(state.hotels.length / SHOW_COUNT);

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

  const handleChange = (index: number): void => {
    setCurrentPage(index);
  };

  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [state.hotels]);

  return (
    <div className="home">
      {selectedHotel && isModalOpen && (
        <Modal hotel={selectedHotel} toggleModal={toggleModal} />
      )}
      <div className="home__header">
        <div style={{ width: "100%" }}>
          <Navigator
            title="Add Hotel"
            icon={<VscAdd />}
            handleNavigate={handleNavigate}
          />
        </div>
        {state.hotels.length > 0 && <Dropdown />}
      </div>
      <div className="card__list">
        {state.hotels.length === 0 && <NoFound />}
        {state.hotels
          .slice(currentPage * SHOW_COUNT, (currentPage + 1) * SHOW_COUNT)
          .map((hotel) => (
            <Card key={hotel.id} hotel={hotel} handleDelete={handleDelete} />
          ))}
      </div>

      {pageCount > 1 ? (
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          handleChange={handleChange}
        />
      ) : null}

      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              background: "green",
              color: "white",
              padding: "1rem",
              opacity: "0.2",
            },
          },
        }}
      />
    </div>
  );
}

export default Home;
