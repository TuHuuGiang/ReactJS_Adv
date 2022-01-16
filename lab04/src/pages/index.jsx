import React from "react";
import { PostList } from "../components/post/postList";
import { PostForm } from "../components/post/postForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import { NavBar } from "../components/navBar";
import "./style.css";

export default function Index() {
  return (
    <>
      <Router>
        <h1>Welcome to Blogs VUS</h1>
        <NavBar />
        <Routes>
          {/*<Route exact path="/" element={<Home />} />*/}
          <Route
            exact
            path="/"
            element={
              <React.Fragment>
                <PostList />
                <PostForm />
              </React.Fragment>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

const Home = () => {
  return (
    <>
      <h1>Welcome to Blogs VUS</h1>
      <PostList />
    </>
  );
};
