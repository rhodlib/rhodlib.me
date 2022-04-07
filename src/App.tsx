import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./containers/Main";
import RightSection from "./containers/RightSection";

function App() {
  return (
    <div className="bg-white dark:bg-slate-800">
      <Header className="flex justify-center" />
      <div className="flex justify-center pb-8 mt-24 px-2">
        <div className="flex mt-4 w-3/5">
          <Main className="flex-1" />
          <RightSection className="flex-2" />
        </div>
      </div>
      <Footer className="flex justify-center" />
    </div>
  );
}

export default App;
