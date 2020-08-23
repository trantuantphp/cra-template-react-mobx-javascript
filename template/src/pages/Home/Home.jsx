import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Stores from "stores";
import logo from "./logo.svg";
import "./Home.scss";
import { Button } from "antd";

const Home = () => {
  const userStore = useContext(Stores.UserStoreContext);
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("home.hello_world")}</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <div style={{ textAlign: "center" }}>
          <Button onClick={() => userStore.changeName("TestContext")}>ChangeName</Button>
        </div>
      </header>
    </div>
  );
};

export default Home;
