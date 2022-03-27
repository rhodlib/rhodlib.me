import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex flex-row  h-full">
      <Header className="basis-1/4 h-full" />
      <Main className="flex-1" />
    </div>
  );
}

export default App;
