import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { onUpdate } from "../reduxFile/postSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import apiClient from "../api/axiosinstance";

export default function EditPost() {
  const { editId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.post.posts);

  const item = list.find((p) => p.postId === Number(editId));

  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const post = {
        postId: Number(editId),
        title: title,
        content: content,
      };

      const response = await apiClient.put("/post", post);
      dispatch(onUpdate(response.data));
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

  return (
    <>
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
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
