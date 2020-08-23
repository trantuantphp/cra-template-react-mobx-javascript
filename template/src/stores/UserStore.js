import { observable, action, configure, computed } from "mobx";
import { createContext } from "react";

configure({
  enforceActions: "always",
});

class UserStore {
  @observable name = "TuanTD";

  @action changeName = (name) => (this.name = name);

  @computed get nameLength() {
    return this.name.length;
  }
}

const UserStoreContext = createContext(new UserStore());

export default UserStoreContext;
