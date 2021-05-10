import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Shipping from "./pages/Shipping";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import UserList from "./pages/UserList";
import UserEdit from "./pages/UserEdit";
import ProductList from "./pages/ProductList";
import ProductEdit from "./pages/ProductEdit";
import OrderList from "./pages/OrderList";
const App = () => {
  return (
    <BrowserRouter>
      <div className="container m-auto">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/order/:id" component={Order} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/profile" component={Profile} />
          <Route path="product/:id" component={Product} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/admin/userlist" component={UserList} />
          <Route path="/admin/user/:id/edit" component={UserEdit} />
          <Route path="/admin/productlist" component={ProductList} />
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductList}
            exact
          />
          <Route path="/admin/product/:id/edit" component={ProductEdit} />
          <Route path="/admin/orderlist" component={OrderList} />
          <Route path="/search/:keyword" component={Home} exact />
          <Route path="/page/:pageNumber" component={Home} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={Home}
            exact
          />
          <Route path="/" component={Home} exact />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
