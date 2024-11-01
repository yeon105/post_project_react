import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { onDelete } from "../reduxFile/postSlice";

export default function PostList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.post.posts);
  const postsList = list.map((p) => (
    <li key={p.id}>
      <NavLink to={"/list/" + p.id}>{p.title}</NavLink>
      &nbsp;
      <button
        onClick={() => {
          dispatch(onDelete(p.id));
          navigate("/list");
        }}
      >
        Delete
      </button>
      &nbsp;
      <NavLink to={"/edit/" + p.id}>Edit</NavLink>
    </li>
  ));

  return (
    <>
      <h1>Post List</h1>
      <ul>{postsList}</ul>
    </>
  );
}
