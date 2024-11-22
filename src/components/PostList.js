import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { onDelete } from "../reduxFile/postSlice";
import apiClient from "../api/axiosInstance";

export default function PostList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.post.posts);

  const handleDelete = async (id) => {
    try {
      const response = await apiClient.delete("/post/" + id);

      dispatch(onDelete(response.data));
    } catch (error) {
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
    } finally {
      navigate("/list");
    }
  };

  const postsList = list.map((p) => (
    <li key={p.postId}>
      <NavLink to={"/list/" + p.postId}>{p.title}</NavLink>
      &nbsp;
      <button id={p.postId} onClick={() => handleDelete(p.postId)}>
        Delete
      </button>
      &nbsp;
      <NavLink to={"/edit/" + p.postId}>Edit</NavLink>
    </li>
  ));

  return (
    <>
      <h1>Post List</h1>
      <ul>{postsList}</ul>
    </>
  );
}
