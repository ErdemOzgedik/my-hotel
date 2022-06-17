import React from "react";
import "./NewOne.scss";
import { VscAdd } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function NewOne() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/add");
  };

  return (
    <div onClick={handleClick} className="new__one">
      <div className="icon">
        <VscAdd />
      </div>
      <span>Add Hotel</span>
    </div>
  );
}

export default NewOne;
