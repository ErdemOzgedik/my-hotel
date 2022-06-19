import React from "react";
import "./Botton.scss";

interface Props {
  handleClick?: () => void;
  body: any;
  type: "button" | "submit" | "reset" | undefined;
  style: React.CSSProperties;
}

function Button({ handleClick, body, type, style }: Props) {
  return (
    <button type={type} className="button" style={style} onClick={handleClick}>
      {body}
    </button>
  );
}

export default Button;
