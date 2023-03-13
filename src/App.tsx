import { Main } from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container mx-auto pt-7 pb-10 px-3 sm:px-0 relative">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
