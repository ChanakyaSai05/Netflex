import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import "./Header.css";
import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { set_data } from "../features/userSlice";
function Navbar({ setFiltered }) {
  // const [input, setInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="home-header">
      <div className="home-headerLeft">
        <img src={logo} alt="imagelogo" width="100" height="50" />
      </div>
      <div className="home-headerRight">
        <div className="home-search-bar" style={{ marginTop: "5px" }}>
          <SearchIcon color="primary" sx={{ fontSize: 22 }} />
          <input
            type="text"
            style={{ width: "15vw", height: "3vh" }}
            placeholder="  Title, people, genres"
            onChange={(e) => {
              // setInput(e.target.value);
              dispatch(set_data(e.target.value));
              // if (input.length > 0) {
              //   setFiltered(true);
              // } else if (input.length === 0) {
              //   setFiltered(false);
              // }
            }}
          />
        </div>
        <img
          className="user-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuIbv-7JSgC23hcGq8qDRBpFzdMBEw8urHdQ&usqp=CAU"
          alt="user image"
          width="50"
          height="50"
        />
      </div>
    </div>
  );
}

export default Navbar;
