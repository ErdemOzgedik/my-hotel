import React from "react";
import { Hotel } from "../../types/model";
import "./Card.scss";

interface Props {
  hotel: Hotel;
}

function Card({ hotel }: Props) {
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
            <button>+</button>
            <span>{hotel.point}</span>
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
