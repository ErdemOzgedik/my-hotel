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
        <h3 className="modal__title">Oteli Sil!</h3>
        <p>{hotel.name}'i silmek istediginizie emin misiniz?</p>
        <div className="modal__buttons">
          <Button
            handleClick={handleDelete}
            body={"Oteli Sil"}
            type="button"
            style={{ background: "#2e25a7", width: "40%" }}
          />
          <Button
            handleClick={toggleModal}
            body={"Vazgec"}
            type="button"
            style={{ background: "#2e25a7", width: "40%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
