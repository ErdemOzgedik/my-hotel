import React from "react";
import { useDispatch } from "react-redux";
import { GrClose } from "react-icons/gr";
import { FaMoneyBill } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import "./Card.scss";
import Button from "../Button/Button";
import { decreasePoint, increasePoint } from "../../redux/hotelSlice";
import { Hotel } from "../../types/model";

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
          <div className="card__content__name">
            <span>{hotel.name}</span>
          </div>
          <div className="card__content__location">
            <GoLocation />
            <span>{hotel.location}</span>
          </div>
          <div className="card__price">
            <FaMoneyBill />
            <span>{hotel.price} TL</span>
          </div>
        </div>
        <div className="card__footer">
          <div className="card__point">
            <Button
              handleClick={handleIncrease}
              body={"+"}
              style={{ background: "#2e25a7", width: "40%" }}
              type="button"
            />
            <span>{hotel.point}</span>
            <Button
              handleClick={handleDecrease}
              body={"-"}
              style={{ background: "#2e25a7", width: "40%" }}
              type="button"
            />
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
