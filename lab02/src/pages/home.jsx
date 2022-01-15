import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
const Info = React.lazy(() => import("./about/info"));
const Contact = React.lazy(() => import("./about/contact"));

export function Home() {
  return (
    <>
      <h1>Welcome to Home Pages</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt minima
        impedit nostrum doloremque ut facere consequatur ratione, fugit, qui et
        fuga ipsam, odit optio ea? Officia ipsa iusto libero maiores?
      </p>
      .
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="info"
            element={
              <React.Suspense fallback={<>...</>}>
                <Info />
              </React.Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <React.Suspense fallback={<>...</>}>
                <Contact />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link> | 
        <Link to="/home/info">Info</Link> |
        <Link to="/home/contact">Contact us</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function NotMatch() {
  return (
    <>
      <h1>Error 404 - pages not found</h1>
      <Link to="/home">Go to home</Link>
    </>
  );
}
