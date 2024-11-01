import React from "react";
import { useDispatch } from "react-redux";
import { onCreate } from "../reduxFile/postSlice";
import { useNavigate } from "react-router-dom";

export default function WritePost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    dispatch(onCreate({ title: title, content: content }));
    navigate("/list");
  };

  return (
    <>
      <h2>Write a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" id="title" placeholder="Title"></input>
        <br />
        <br />
        <textarea name="content" id="content" placeholder="Content"></textarea>
        <br />
        <br />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
