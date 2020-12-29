import React, { createContext, useState } from "react";

// Shipping Details context
export const ShippingContext = createContext();

export const CartProvider = (props) => {
  // Maintain Shipping state
  const [shippingState, setShippingState] = useState({});

  return (
    <ShippingContext.Provider value={[shippingState, setShippingState]}>
      {props.children}
    </ShippingContext.Provider>
  );
};