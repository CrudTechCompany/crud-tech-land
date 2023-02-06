import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import style from "./App.module.css";
import Footer from "./components/Footer/Footer";
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const App = () => {
  return (
    <div className={style["app"]}>
      <div className={style["content"]}>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<Body />} />
          </Route>
          <Route path="*"/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
