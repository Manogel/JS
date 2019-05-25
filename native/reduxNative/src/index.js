import "./config/ReactroTronConfig";
import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store/index";
import { setNavigator } from "./services/navigation";
// import { Container } from './styles';

const App = () => (
  <Provider store={store}>
    <Routes ref={setNavigator} />
  </Provider>
);

export default App;
