import React from "react";
import "./Pagination.scss";

interface Props {
  pageCount: number;
  currentPage: number;
  handleChange(index: number): void;
}

const Pagination = ({ pageCount, currentPage, handleChange }: Props) => {
  return (
    <div className="pagination">
      <div className="pagination__list">
        {Array.from(Array(pageCount), (e, i) => {
          return (
            <div
              className={
                "pagination__list__item" + (currentPage === i ? " active" : "")
              }
              key={i}
              onClick={() => handleChange(i)}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
