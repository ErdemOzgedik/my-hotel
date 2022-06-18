import React from "react";
import { useDispatch } from "react-redux";
import { decreasePoint, increasePoint } from "../../redux/hotelSlice";
import { Hotel } from "../../types/model";
import "./Card.scss";
import { GrClose } from "react-icons/gr";

interface Props {
  hotel: Hotel;
  handleDelete: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function Card({ hotel, handleDelete }: Props) {
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
      <div
        onClick={handleDelete}
        className="card__delete"
        data-id={hotel.id}
        data-name={hotel.name}
      >
        <GrClose />
      </div>
    </div>
  );
}

export default Card;
