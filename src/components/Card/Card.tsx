import React from "react";
import "./Card.scss";

function Card() {
  const hotel = {
    name: "Titanic Beach Hotel Lara",
    location: "Lara-Kundu, Antalya Merkez, Antalya",
    img: "https://images.etstur.com/files/images/hotelImages/TR/51942/m/Titanic-Beach-Hotel-Lara-Genel-301888.jpg",
    point: 0,
    created_at: 1655410205321,
    updated_at: 1655410221118,
    price: 4000,
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
