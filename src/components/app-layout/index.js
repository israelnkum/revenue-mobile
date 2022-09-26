import React from "react";
import Store from "../../utils/store";
import { Provider } from "react-redux";
import RootNav from "./root-nav";

const AppLayout = () => (
  <Provider store={Store}>
    <RootNav />
  </Provider>
);

export default AppLayout;
