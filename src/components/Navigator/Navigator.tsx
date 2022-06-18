import React from "react";
import "./Navigator.scss";

interface Props {
  title: string;
  icon: any;
  handleNavigate: () => void;
}

function Navigator({ title, icon, handleNavigate }: Props) {
  return (
    <div onClick={handleNavigate} className="navigator">
      <div className="icon">{icon}</div>
      <span>{title}</span>
    </div>
  );
}

export default Navigator;
