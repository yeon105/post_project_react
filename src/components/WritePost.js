import React from "react";
import { useDispatch } from "react-redux";
import { onCreate } from "../reduxFile/postSlice";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/axiosinstance";

export default function WritePost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const post = {
        title: e.target.title.value,
        content: e.target.content.value,
      };

      const response = await apiClient.post("/post", post);

      dispatch(onCreate(response.data));
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
