import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import data from "../data/data.js";
import logo1 from "../assets/images/logo1.png";
import RefreshIcon from "@mui/icons-material/Refresh";
import "./Home.css";
function Home() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("white");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCount) => {
        if (prevCount === 9) {
          return (prevCount = 0);
        } else {
          return prevCount + 1;
        }
      });
    }, 8000);
    return () => clearInterval(intervalId);
  }, []);
  // D1512D
  // F77E21
  //FFD24C
  useEffect(() => {
    if (
      counter === 3 ||
      counter === 6 ||
      counter === 7 ||
      counter === 8 ||
      counter === 9
    ) {
      setColor("#D1512D");
    } else {
      setColor("white");
    }
  }, [counter]);
  console.log(counter);
  return (
    <div>
      <div className="hero">
        <img className="hero-img" src={data.movies[counter]?.img} alt="" />
        <div className="hero-left">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <img src={logo1} width="18px" height="30px" alt="logo pic" />
            <span
              style={{ fontWeight: "bold", marginLeft: "5px", color: color }}
            >
              S E R I E S
            </span>
          </div>

          <h2 className="title" style={{ color: color }}>
            {data.movies[counter]?.title}
          </h2>
          <h4 style={{ color: color }}>
            season2 coming on {data.movies[counter]?.year}
          </h4>
          <p style={{ marginTop: "-30px", color: color }}>
            {data.movies[counter]?.description}
          </p>
          <div className="hero__buttons">
            <div className="hero__buttons-left">
              <button className="play-btn">
                <PlayArrowIcon /> Play
              </button>
              <button className="info-btn">
                <InfoOutlinedIcon /> More Info
              </button>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  marginRight: "8px",
                  cursor: "pointer",
                }}
                onClick={() => setCounter(0)}
              >
                <RefreshIcon style={{ color: color }} />
              </div>
              <h2 className="age-description">
                {data.movies[counter]?.ageGroup}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
