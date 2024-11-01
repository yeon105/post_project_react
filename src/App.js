import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostLayout from "./components/PostLayout";
import Post from "./components/Post";
import PostList from "./components/PostList";
import WritePost from "./components/WritePost";
import PostInfo from "./components/PostInfo";
import EditPost from "./components/EditPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostLayout />}>
          <Route index element={<Post />}></Route>
          <Route path="list" element={<PostList />}></Route>
          <Route path="list/:postId" element={<PostInfo />}></Route>
          <Route path="write" element={<WritePost />}></Route>
          <Route path="edit/:editId" element={<EditPost />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
