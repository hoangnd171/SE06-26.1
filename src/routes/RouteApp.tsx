import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "../components/widgets/Nav";
import SignInScreen from "../components/screens/SignInScreen";
import SignUpScreen from "../components/screens/SignUpScreen";
import HomeScreen from "../components/screens/HomeScreen";
import ContactScreen from "../components/screens/ContactScreen";
import ServiceScreen from "../components/screens/ServiceScreen";
import Category from "../components/screens/Category";
import ShoppingCart from "../components/screens/ShoppingCart";
import Payment from "../components/screens/Payment";
import ProductDetails from "../components/screens/ProductDetails";
import AddProduct from "../components/screens/AddProduct";
import OrdersManagement from "../components/screens/OrdersManagement";
import Messenger from "../components/screens/Messenger";
import Card from "../components/screens/Card";
import Cart from "../components/screens/Cart";
import User from "../components/screens/User";
import MyProduct from "../components/screens/MyProduct";
import UserOrder from "../components/screens/UserOrder";
import Notifications from "../components/screens/Notifications";
import Seller from "../components/screens/Seller";
import Shop from "../components/screens/Shop";

export default function RouteApp() {
  return (
    <HashRouter>
      <Header />

      <Switch>
        <Route exact path="/">
          <HomeScreen></HomeScreen>
        </Route>
        <Route exact path="/HomeScreen">
          <HomeScreen></HomeScreen>
        </Route>
        <Route exact path="/ServiceScreen">
          <ServiceScreen></ServiceScreen>
        </Route>
        <Route exact path="/ContactScreen">
          <ContactScreen></ContactScreen>
        </Route>
        <Route exact path="/UserOrder">
          <UserOrder></UserOrder>
        </Route>
        <Route exact path="/CartScreen">
          <ShoppingCart></ShoppingCart>
        </Route>
        <Route exact path="/SignInScreen">
          <SignInScreen></SignInScreen>
        </Route>
        <Route exact path="/SignUpScreen">
          <SignUpScreen></SignUpScreen>
        </Route>
        <Route exact path="/Category">
          <Category></Category>
        </Route>
        <Route exact path="/Cart">
          <Cart></Cart>
        </Route>
        <Route exact path="/Seller">
          <Seller></Seller>
        </Route>
        <Route exact path="/Payment">
          <Payment></Payment>
        </Route>
        <Route exact path="/ProductDetails">
          <ProductDetails></ProductDetails>
        </Route>
        <Route exact path="/AddProduct">
          <AddProduct></AddProduct>
        </Route>
        <Route exact path="/MyProduct">
          <MyProduct></MyProduct>
        </Route>
        <Route exact path="/OrdersManagement">
          <OrdersManagement></OrdersManagement>
        </Route>
        <Route exact path="/User">
          <User></User>
        </Route>
        <Route exact path="/Messenger">
          <Messenger></Messenger>
        </Route>
        <Route exact path="/Card">
          <Card></Card> 
        </Route>
        <Route exact path="/Notifications">
          <Notifications></Notifications>
        </Route>
        <Route exact path="/Shop">
          <Shop></Shop>
        </Route>
      </Switch>
    </HashRouter>
  );
}
