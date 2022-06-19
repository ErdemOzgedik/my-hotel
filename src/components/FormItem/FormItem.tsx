import React from "react";
import "./FormItem.scss";

interface Props {
  id: string;
  icon: any;
  type: React.HTMLInputTypeAttribute | undefined;
  value: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pattern?: string;
}

function FormItem({ id, icon, type, value, handleChange, pattern }: Props) {
  return (
    <div className="form__item">
      <label className="formItem__label" htmlFor={id}>
        {icon}
      </label>
      <input
        className="formItem__input"
        autoComplete="off"
        required
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={`Hotel ${id}`}
        pattern={pattern}
      />
    </div>
  );
}

export default FormItem;
