import React, { useState } from "react";
import "./Create.scss";
import { FaHotel, FaMoneyBill, FaImage, FaStepBackward } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { VscAdd } from "react-icons/vsc";
import Navigator from "../../components/Navigator/Navigator";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addHotel } from "../../redux/hotelSlice";

//https://images.etstur.com/files/images/hotelImages/TR/51164/m/Club-Yali-Hotels---Resort-Genel-133324.jpg

function Create() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    location: "",
    price: 0,
    img: "",
  });

  const handleNavigate = () => {
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;

    setState((prevState) => ({ ...prevState, [id]: value.trim() }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const currentTime = new Date().getTime();
    e.preventDefault();
    dispatch(
      addHotel({
        ...state,
        id: currentTime,
        point: 0,
        created_at: currentTime,
        updated_at: currentTime,
      })
    );
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <Navigator
        title="Go Back"
        icon={<FaStepBackward />}
        handleNavigate={handleNavigate}
      />
      <div className="create__header">Add a new Hotel</div>
      <div className="create__form">
        <div className="form__item">
          <label htmlFor="name">
            <FaHotel />
          </label>
          <input
            autoComplete="off"
            required
            type="text"
            id="name"
            value={state.name}
            onChange={handleChange}
            placeholder="Hotel name"
          />
        </div>
        <div className="form__item">
          <label htmlFor="location">
            <GoLocation />
          </label>
          <input
            autoComplete="off"
            required
            type="text"
            id="location"
            value={state.location}
            onChange={handleChange}
            placeholder="Hotel location"
          />
        </div>
        <div className="form__item">
          <label htmlFor="price">
            <FaMoneyBill />
          </label>
          <input
            autoComplete="off"
            required
            type="number"
            id="price"
            value={state.price}
            min={1}
            onChange={handleChange}
            placeholder="Hotel price"
          />
        </div>
        <div className="form__item">
          <label htmlFor="img">
            <FaImage />
          </label>
          <input
            autoComplete="off"
            required
            type="url"
            id="img"
            pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)(.jpg|.png|.gif)"
            value={state.img}
            onChange={handleChange}
            placeholder="Hotel image url"
          />
        </div>

        <button type="submit" className="form__submit">
          <VscAdd />
        </button>
      </div>
    </form>
  );
}

export default Create;
