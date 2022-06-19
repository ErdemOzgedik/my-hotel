import React from "react";
import { useDispatch } from "react-redux";
import { GrClose } from "react-icons/gr";
import { FaMoneyBill } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import "./Card.scss";
import Button from "../Button/Button";
import { decreaseRate, increaseRate } from "../../redux/hotelSlice";
import { Hotel } from "../../types/model";

interface Props {
  hotel: Hotel;
  handleDelete: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function Card({ hotel, handleDelete }: Props) {
  const dispatch = useDispatch();

  const getBorderColor = () => {
    if (hotel.rate >= 18) return "#4CAF50";
    if (hotel.rate >= 15) return "#8BC34A";
    if (hotel.rate >= 12) return "#CDDC39";
    if (hotel.rate >= 9) return "#FFEB3B";
    if (hotel.rate >= 6) return "#FFC107";
    if (hotel.rate >= 3) return "#FF9800";
    return "#F44336";
  };

  const handleIncrease = () => {
    dispatch(increaseRate(hotel.id));
  };

  const handleDecrease = () => {
    if (hotel.rate > 0) {
      dispatch(decreaseRate(hotel.id));
    }
  };

  return (
    <div className="card">
      <img src={hotel.img} alt="hotel" />
      <div className="card__container">
        <div className="card__content">
          <div className="card__content__name">
            <span>{hotel.name}</span>
          </div>
          <div className="card__content__location">
            <GoLocation />
            <span>{hotel.location}</span>
          </div>
          <div className="card__price">
            <FaMoneyBill />
            <div>
              <span>{hotel.price} TL</span> per night
            </div>
          </div>
        </div>
        <div className="card__footer">
          <div className="card__buttons">
            <Button
              handleClick={handleIncrease}
              body={"+"}
              style={{ background: "#2e25a7", width: "100%" }}
              type="button"
            />
            <Button
              handleClick={handleDecrease}
              body={"-"}
              style={{ background: "#2e25a7", width: "100%" }}
              type="button"
            />
          </div>
          <div className="card__rate" style={{ background: getBorderColor() }}>
            Rate: {hotel.rate}
          </div>
        </div>
      </div>
      <div onClick={handleDelete} className="card__delete" data-id={hotel.id}>
        <GrClose />
      </div>
    </div>
  );
}

export default Card;
