import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import data from "../data/data.js";
import { selectUser } from "../features/userSlice.js";
import "./PopularShows.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function PopularShows() {
  const ref = useRef(null);
  const user = useSelector(selectUser);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  const filtered = data?.shows?.filter((item) =>
    item.title.toLowerCase().includes(user.toLowerCase())
  );
  return (
    <>
      <h2 style={{ color: "white", marginLeft: "40px" }}>Popular on NetFlix</h2>
      <div className="showlist">
        <div className="shows" ref={ref}>
          {filtered?.map((show) => {
            return (
              <div className="show">
                <img src={show.img} alt="" />
              </div>
            );
          })}
        </div>
        {/* <button>&gt;</button> */}
        <div onClick={() => scroll(100)}>
          <ArrowForwardIosIcon
            style={{
              color: "white",
              paddingTop: "35px",
              marginRight: "30px",
              height: "45px",
              width: "40px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </>
  );
}
export default PopularShows;
