import React from "react";
import { useDispatch } from "react-redux";
import { deleteHotel } from "../../redux/hotelSlice";
import { Hotel } from "../../types/model";
import "./Modal.scss";

interface Props {
  hotel: Hotel;
  toggleModal: () => void;
}

function Modal({ hotel, toggleModal }: Props) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    toggleModal();
    dispatch(deleteHotel(hotel.id));
  };

  return (
    <div className="modal">
      <div className="modal__container">
        <h3 className="modal__title">Oteli Sil!</h3>
        <p>{hotel.name}'i silmek istediginizie emin misiniz?</p>
        <div className="modal__buttons">
          <button type="button" onClick={handleDelete}>
            Oteli Sil
          </button>
          <button type="button" onClick={toggleModal}>
            Vazgec
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
