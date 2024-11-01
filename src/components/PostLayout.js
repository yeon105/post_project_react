import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function PostLayout() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <NavLink to="">Home</NavLink> |<NavLink to="list">Post List</NavLink> |
        <NavLink to="write">Write Post</NavLink> |
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
