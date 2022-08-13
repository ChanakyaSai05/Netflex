import "./App.css";
import Header from "./components/Header";
import PopularShows from "./components/PopularShows";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
function App() {
  const [filtered, setFiltered] = useState(false);
  const user = useSelector(selectUser);
  useEffect(() => {
    if (user.length > 0) {
      setFiltered(true);
    } else {
      setFiltered(false);
    }
  }, [user]);
  return (
    <div className="home ">
      <Header filtered={filtered} setFiltered={setFiltered} />
      <div className="home-body">
        {!filtered && <Home />}
        <PopularShows />
      </div>
    </div>
  );
}

export default App;
