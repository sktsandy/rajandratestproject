import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import Products from "./components/Products";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Products />
      </Provider>
    </>
  );
};

export default App;
