import React from "react";
import { useDispatch } from "react-redux";
import { decreasePoint, increasePoint } from "../../redux/hotelSlice";
import { Hotel } from "../../types/model";
import "./Card.scss";

interface Props {
  hotel: Hotel;
}

function Card({ hotel }: Props) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increasePoint(hotel.id));
  };

  const handleDecrease = () => {
    if (hotel.point > 0) {
      dispatch(decreasePoint(hotel.id));
    }
  };

  return (
    <div className="card">
      <img src={hotel.img} alt="hotel" />
      <div className="card__container">
        <div className="card__content">
          <span className="card__content__name">{hotel.name}</span>
          <span className="card__content__location">{hotel.location}</span>
        </div>
        <div className="card__footer">
          <div className="card__price">
            <span>{hotel.price} TL</span>
          </div>
          <div className="card__point">
            <button onClick={handleIncrease}>+</button>
            <span>{hotel.point}</span>
            <button onClick={handleDecrease}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
