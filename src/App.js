import React from "react";
import "./App.css";
import ConfigRoute from "./Route";
import { Provider } from "react-redux";
import { CartProvider } from "./CartContext";
import { store } from "./store";

function App() {
  return (
    <div>
      <CartProvider>
        <Provider store={store}>
          <ConfigRoute />
        </Provider>
      </CartProvider>
    </div>
  );
}

export default App;
