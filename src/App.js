//import logo from './logo.svg';
import React,{ useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { CheckOutlined } from '@material-ui/icons';
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51IvFXDSIhaay1G0l3Sk4MZtVVaDFRKsXdfGkH65RTivKAaKcgHGOVUcx6woB9Ery60mIquSSiRkTlm0pM3lVCcdu00IlwURNje');

function App() {
  const[{}, dispatch] = useStateValue();
  useEffect(()=> {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
      if(authUser){
        // the user just logged in/ the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    //will only run once when the app component loads...

  },[])
  return (

    <Router>
      <div className="App">
      

        <Switch>
        <Route path = "/orders">
          <Header/>
            <Orders/>

          </Route>
          <Route path = "/login">
            
            <Login />

          </Route>

          <Route path = "/checkout">
          <Header/>
              <Checkout />
          </Route>
          {/*this way we separate the pages in the app.js files*/}
          <Route path= "/payment">
            <Header/>
            <Elements stripe = {promise}>
              <Payment/>
            </Elements>
             
          </Route>

            <Route path = "/">
            <Header/>
              <Home/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
