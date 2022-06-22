import React from "react";
import { SHOW_COUNT } from "../../types/constants";
import { Hotel } from "../../types/model";
import Card from "../Card/Card";
import "./CardList.scss";

interface Props {
  hotels: Hotel[];
  currentPage: number;
  handleDelete: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function CardList({ hotels, currentPage, handleDelete }: Props) {
  return (
    <div className="card__list">
      {hotels
        .slice(currentPage * SHOW_COUNT, (currentPage + 1) * SHOW_COUNT)
        .map((hotel) => (
          <Card key={hotel.id} hotel={hotel} handleDelete={handleDelete} />
        ))}
    </div>
  );
}

export default CardList;
