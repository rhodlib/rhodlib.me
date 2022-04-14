import Footer from "./components/Footer";
import Header from "./components/Header";
import Blog from "./containers/Blog";
import Home from "./containers/Home";
import Projects from "./containers/Projects";
import Techs from "./containers/Techs";

function App() {
  return (
    <div className="h-full">
      <Header className="flex w-full justify-between bg-dark fixed px-20 py-5 " />
      <Home
        className="bg-dark h-screen w-full flex justify-around items-center"
        id="home"
      />
      <Blog className="flex h-screen px-20 py-5 " id="blog" />
      <Projects
        className="flex flex-col w-full h-screen justify-center bg-secondary px-20 py-5 "
        id="projects"
      />
      <Techs className="w-full" />
      <Footer
        className="flex justify-between items-center px-20 py-5 bg-dark"
        id="contact"
      />
    </div>
  );
}

export default App;
