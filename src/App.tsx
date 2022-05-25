import Home from "./containers/Home";
import Layout from "./containers/Layout";
import { Routes, Route } from "react-router-dom";
import Blog from "./containers/Blog";
import Post from "./containers/Post";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              className="flex flex-col md:flex-row justify-center md:justify-around items-center bg-dark h-screen"
              id="home"
            />
          }
        />
        <Route
          path="/blog"
          element={
            <Blog
              className="flex justify-center items-center bg-dark h-screen"
              id="blog"
            />
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <Post
              className="flex justify-center items-center bg-dark py-24"
              id="post"
            />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
