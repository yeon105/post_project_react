import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { onUpdate } from "../reduxFile/postSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function EditPost() {
  const { editId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.post.posts);

  const item = list.find((p) => p.id === Number(editId));

  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);

  return (
    <>
      <h1>Edit Post</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newItem = {
            id: Number(editId),
            title: title,
            content: content,
          };

          dispatch(onUpdate(newItem));
          navigate("/list");
        }}
      >
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <br />
        <br />
        <textarea
          name="content"
          id="content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <br />
        <br />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
