import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";

function App() {
  return (
    <div className="h-full">
      <Navbar className="flex w-full justify-between bg-dark fixed" />
      <Home
        className="bg-dark h-screen w-full flex justify-around items-center"
        id="home"
      />
      {/* <Footer
        className="flex bottom-0 w-full fixed justify-between items-center px-20 py-5 bg-dark"
        id="contact"
      /> */}
    </div>
  );
}

export default App;
