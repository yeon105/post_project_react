import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function PostInfo() {
  const list = useSelector((state) => state.post.posts);
  const { postId } = useParams();
  const item = list.find((p) => p.postId === Number(postId));

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.content}</p>
    </div>
  );
}
