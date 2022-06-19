import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import "./Modal.scss";
import { deleteHotel } from "../../redux/hotelSlice";
import { Hotel } from "../../types/model";
import Button from "../Button/Button";

interface Props {
  hotel: Hotel;
  toggleModal: () => void;
}

function Modal({ hotel, toggleModal }: Props) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    toggleModal();
    dispatch(deleteHotel(hotel.id));

    toast.success("Hotel successfully deleted!");
  };

  return (
    <div className="modal">
      <div className="modal__container">
        <h3 className="modal__title">Delete Hotel!</h3>
        <p>Would you like to delete {<span>{hotel.name}</span>}?</p>
        <div className="modal__buttons">
          <Button
            handleClick={handleDelete}
            body={"Delete"}
            type="button"
            style={{ background: "#2e25a7", width: "40%" }}
          />
          <Button
            handleClick={toggleModal}
            body={"Back"}
            type="button"
            style={{ background: "#2e25a7", width: "40%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
