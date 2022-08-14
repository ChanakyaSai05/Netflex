import "./App.css";
import Header from "./components/Header";
import PopularShows from "./components/PopularShows";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
function App() {
  const [filtered, setFiltered] = useState(true);
  const [color, setColor] = useState("transparent");
  const user = useSelector(selectUser);
  useEffect(() => {
    if (user.length > 0) {
      setFiltered(false);
      setColor("black");
    } else {
      setFiltered(true);
      setColor("transparent");
    }
  }, [user]);
  return (
    <div className="home " style={{ backgroundColor: color }}>
      <Header filtered={filtered} setFiltered={setFiltered} />
      <div className="home-body">
        {filtered ? (
          <Home />
        ) : (
          <div
            style={{
              marginLeft: "40px",
              marginBottom: "-25px",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            Showing search results for:
            <h3 style={{ marginLeft: "4px" }}> {user}</h3>
          </div>
        )}
        {filtered ? (
          <h2
            style={{
              color: "white",
              marginLeft: "40px",
              fontWeight: "bolder",
            }}
          >
            Popular on NetFlix
          </h2>
        ) : (
          <h2
            style={{
              color: "transparent",
              marginLeft: "40px",
            }}
          >
            Popular on NetFlix
          </h2>
        )}

        <PopularShows />
      </div>
    </div>
  );
}

export default App;
