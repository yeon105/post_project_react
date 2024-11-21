import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import apiClient from "../api/axiosInstance";
import { onCreate } from "../reduxFile/postSlice";
import { useDispatch } from "react-redux";

export default function PostLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    apiClient
      .get("/post-list")
      .then((response) => {
        response.data.map((p) => dispatch(onCreate(p)));
      })
      .catch((error) => {
        if (error.code === "ECONNABORTED") {
          console.log("요청시간초과");
        } else if (error.response) {
          console.log("서버 에러");
          console.log(error.response.status);
          console.log(error.response.data);
        } else if (error.request) {
          console.log("요청 패킷 에러");
        } else {
          console.log("에러 발생", error.message);
        }
      });
  }, []);

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
