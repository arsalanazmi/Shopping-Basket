import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Header,
  Home,
  About,
  Product,
  ProductDetails,
  ShoppingBasket,
  Checkout,
  OrderSummary,
  PlaceOrder,
  NotFound,
} from "./Components";

const ConfigRoute = () => {
  return (
    <div>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/product" component={Product} />
          <Route path="/product_details/:productId" component={ProductDetails} />
          <Route path="/shopping_basket" component={ShoppingBasket} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/order_summary" component={OrderSummary} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default ConfigRoute;