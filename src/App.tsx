import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./containers/Main";

function App() {
  return (
    <div className="bg-gray-800 h-screen">
      <Header className="flex w-full" />
      <Main className="flex-1" />
      <Footer className="flex justify-center bottom-0" />
    </div>
  );
}

export default App;
