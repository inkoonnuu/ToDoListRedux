import { createRoot } from "react-dom/client";
import "../public/index.css";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import index from "./reducers";

const store = createStore(index);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
