import React, { useEffect, useRef, useState } from "react";
import "./Create.scss";
import { FaHotel, FaMoneyBill, FaImage, FaStepBackward } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { VscAdd } from "react-icons/vsc";
import Navigator from "../../components/Navigator/Navigator";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addHotel } from "../../redux/hotelSlice";
import toast, { Toaster } from "react-hot-toast";
import Button from "../../components/Button/Button";
import FormItem from "../../components/FormItem/FormItem";

function Create() {
  const toasterRef = useRef("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    location: "",
    price: "",
    img: "https://images.etstur.com/files/images/hotelImages/TR/51164/m/Club-Yali-Hotels---Resort-Genel-133324.jpg",
  });

  const handleNavigate = () => {
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;

    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const currentTime = new Date().getTime();
    e.preventDefault();
    dispatch(
      addHotel({
        price: parseInt(state.price),
        img: state.img,
        location: state.location,
        name: state.name.trim(),
        id: currentTime,
        point: 0,
        created_at: currentTime,
        updated_at: currentTime,
      })
    );

    toasterRef.current = toast.success("Hotel successfully added!");
  };

  useEffect(() => {
    return () => {
      toast.dismiss(toasterRef.current);
    };
  }, []);

  return (
    <form className="create" onSubmit={handleSubmit}>
      <Navigator
        title="Go Back"
        icon={<FaStepBackward />}
        handleNavigate={handleNavigate}
      />
      <div className="create__header">Add a new Hotel</div>
      <div className="create__form">
        <FormItem
          id="name"
          icon={<FaHotel />}
          value={state.name}
          handleChange={handleChange}
          type="text"
        />
        <FormItem
          id="location"
          icon={<GoLocation />}
          value={state.location}
          handleChange={handleChange}
          type="text"
        />
        <FormItem
          id="price"
          icon={<FaMoneyBill />}
          value={state.price}
          handleChange={handleChange}
          type="text"
          pattern="[0-9]*"
        />
        <FormItem
          id="img"
          icon={<FaImage />}
          value={state.img}
          handleChange={handleChange}
          type="url"
          pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)(.jpg|.png|.gif)"
        />
        <Button
          body={<VscAdd />}
          type="submit"
          style={{ background: "#8c54ff", width: "100%" }}
        />
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            duration: 3000,
            theme: {
              primary: "white",
              secondary: "black",
            },
            style: {
              background: "green",
              color: "white",
              padding: "1rem",
              opacity: "0.2",
            },
          },
        }}
      />
    </form>
  );
}

export default Create;
