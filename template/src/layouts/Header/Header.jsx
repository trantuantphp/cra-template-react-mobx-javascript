import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import UserStoreContext from "stores/UserStore";
import { useObserver } from "mobx-react-lite";

const Header = () => {
  const userStore = useContext(UserStoreContext);
  const { i18n } = useTranslation();
  return useObserver(() => (
    <div>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <button onClick={() => i18n.changeLanguage("vi")}>VI</button>
      {userStore.name} : {userStore.nameLength}
    </div>
  ));
};

export default Header;
