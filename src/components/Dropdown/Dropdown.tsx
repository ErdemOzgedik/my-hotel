import React, { useEffect, useState } from "react";
import { GoArrowDown, GoArrowRight } from "react-icons/go";
import { useDispatch } from "react-redux";
import "./Dropdown.scss";
import { filterHotels } from "../../redux/hotelSlice";
import { FILTER_TYPES } from "../../types/enums";

const data = [
  { id: FILTER_TYPES.HIGHEST_PRICE, label: "En Yuksek Fiyat" },
  { id: FILTER_TYPES.LOWEST_PRICE, label: "En Dusuk Fiyat" },
  { id: FILTER_TYPES.HIGHEST_POINT, label: "En Yuksek Puan" },
  { id: FILTER_TYPES.LOWEST_POINT, label: "En Dusuk Puan" },
];

function Dropdown() {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let targetId = parseInt(e.currentTarget.id);
    setTimeout(() => {
      toggleDropdown();
    }, 200);

    selectedItem === targetId ? setSelectedItem(0) : setSelectedItem(targetId);
  };

  useEffect(() => {
    dispatch(filterHotels(selectedItem));
  }, [dispatch, selectedItem]);

  return (
    <div className="dropdown">
      <div className="dropdown__header" onClick={toggleDropdown}>
        <span>
          {selectedItem
            ? data.find((item) => item.id === selectedItem)?.label
            : "Önerilen Sıralama"}
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
            id={item.id.toString()}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
