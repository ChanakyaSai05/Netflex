import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import data from "../data/data.js";
import logo1 from "../assets/images/logo1.png";
import "./Home.css";
function Home() {
  return (
    <div>
      <div className="hero">
        <img className="hero-img" src={data.movies[4]?.img} alt="" />
        <div className="hero-left">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <img src={logo1} width="18px" height="30px" />
            <span style={{ fontWeight: "bold", marginLeft: "5px" }}>
              {"   "}S E R I E S
            </span>
          </div>

          <h2 className="title">{data.movies[4].title}</h2>
          <h4>season2 coming on {data.movies[4].year}</h4>
          <p style={{ marginTop: "-30px" }}>{data.movies[4].description}</p>
          <div className="hero__buttons">
            <div className="hero__buttons-left">
              <button className="play-btn">
                <PlayArrowIcon /> Play
              </button>
              <button className="info-btn">
                <InfoOutlinedIcon /> More Info
              </button>
            </div>
            <h2 className="age-description">{data.movies[4].ageGroup}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
