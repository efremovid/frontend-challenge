import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Favourites from "../../pages/Favourites/Favourites";

const Navigation = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/favourites" element={<Favourites />} />
    </Routes>
  );
};

export default Navigation;
