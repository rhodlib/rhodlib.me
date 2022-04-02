import Header from "./components/Header";
import Main from "./containers/Main";
import RightSection from "./containers/RightSection";

function App() {
  return (
    <>
      <Header className="flex justify-center" />
      <div className="flex justify-center pb-8 mt-24">
        <div className="flex mt-4 w-3/5">
          <Main className="flex-1" />
          <RightSection className="flex-2 mt-8" />
        </div>
      </div>
    </>
  );
}

export default App;
