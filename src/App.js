import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import Home from './components/Home/Home/Home'
import Login from './components/Login/Login'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DetailBlog from "./components/Blog/DetailBlog/DetailBlog";
import AddBlog from "./components/AddBlog/AddBlog";
import DeleteBlog from "./components/DeleteBlog/DeleteBlog";
import AllBlogs from "./components/AllBlogs/AllBlogs";

export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
console.log(loggedInUser);
console.log(loggedInUser.displayName);  //mail,pass
console.log(loggedInUser.name); //google
console.log(loggedInUser.email);
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <PrivateRoute path="/detailBlog/:id">
            <DetailBlog/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/allBlogs">
            <AllBlogs/>
          </PrivateRoute>
          <PrivateRoute path="/addBlog">
            <AddBlog/>
          </PrivateRoute>
          <PrivateRoute path="/deleteBlog">
            <DeleteBlog/>
          </PrivateRoute>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;