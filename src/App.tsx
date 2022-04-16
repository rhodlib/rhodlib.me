import Home from "./containers/Home";
import Layout from "./containers/Layout";
import { Routes, Route } from "react-router-dom";

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
      </Routes>
    </Layout>
  );
}

export default App;
