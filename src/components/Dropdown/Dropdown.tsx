import React, { useState } from "react";
import { GoArrowDown, GoArrowRight } from "react-icons/go";

import "./Dropdown.scss";

const data = [
  { id: "0", label: "Fiyata Göre Artan" },
  { id: "1", label: "Fiyata Göre Azalan" },
  { id: "2", label: "Puana Göre Artan" },
  { id: "3", label: "Puana Göre Azalan" },
];

function Dropdown() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("");

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setTimeout(() => {
      toggleDropdown();
    }, 200);

    selectedItem === e.currentTarget.id
      ? setSelectedItem("")
      : setSelectedItem(e.currentTarget.id);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__header" onClick={toggleDropdown}>
        <span>
          {selectedItem
            ? data.find((item) => item.id === selectedItem)?.label
            : "Select your destination"}
        </span>
        {isOpen ? <GoArrowDown /> : <GoArrowRight />}
      </div>
      <div className={`dropdown__body ${isOpen && "open"}`}>
        {data.map((item) => (
          <div
            key={item.id}
            className={`dropdown__item ${
              item.id === selectedItem && "selected"
            }`}
            onClick={handleItemClick}
            id={item.id}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
