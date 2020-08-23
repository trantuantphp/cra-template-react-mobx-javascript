import { configure } from "mobx";
import UserStoreContext from "./UserStore";

configure({
  enforceActions: "always",
});

const Stores = {
  UserStoreContext,
};

export default Stores;
