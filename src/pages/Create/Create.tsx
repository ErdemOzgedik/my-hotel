import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { FaHotel, FaMoneyBill, FaImage } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import { VscAdd } from "react-icons/vsc";
import "./Create.scss";
import Button from "../../components/Button/Button";
import FormItem from "../../components/FormItem/FormItem";
import Navigator from "../../components/Navigator/Navigator";
import { addHotel } from "../../redux/hotelSlice";

function Create() {
  const toasterRef = useRef("");
  const errorMessage = useRef("");
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

  const isFormValid = (): boolean => {
    if (!state.name.trim()) {
      errorMessage.current = "Hotel name required";
      return false;
    }
    if (!state.location.trim()) {
      errorMessage.current = "Hotel location required";
      return false;
    }
    if (!/^\d+$/.test(state.price)) {
      errorMessage.current = "Hotel price should be a number and higher than 0";
      return false;
    }
    if (!new RegExp("[/.](gif|jpg|jpeg|tiff|png)$").test(state.img)) {
      errorMessage.current = "Hotel img should be an img url";
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const currentTime = new Date().getTime();
    e.preventDefault();
    toast.dismiss(toasterRef.current);

    if (isFormValid()) {
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
      return;
    }

    toasterRef.current = toast.error(errorMessage.current);
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
        icon={<IoIosArrowBack />}
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
        />
        <FormItem
          id="img"
          icon={<FaImage />}
          value={state.img}
          handleChange={handleChange}
          type="url"
        />
        <Button
          body={<VscAdd />}
          type="submit"
          style={{ background: "#2e25a7", width: "100%", padding: "1.5rem" }}
        />
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              background: "green",
              color: "white",
              padding: "1rem",
              opacity: "0.2",
            },
          },
          error: {
            duration: 3000,
            style: {
              background: "white",
              color: "red",
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
