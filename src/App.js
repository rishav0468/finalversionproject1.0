import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Sorting from "./Sorting";
import Sorting2 from "./Sorting2";
import Backtracking from "./Backtracking";
import Searching from "./Searching";
import Binarytree from "./binarytree";

function App() {
  const location = useLocation();

  function checkFirstLoad() {
    if (location.pathname === "/") {
      const isFirstLoad = localStorage.getItem("isFirstLoad");
      if (!isFirstLoad) {
        localStorage.setItem("isFirstLoad", true);
      } else {
        localStorage.removeItem("isFirstLoad");
      }
    }
  }

  checkFirstLoad();

  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/sorting" element={<Sorting />} />
      <Route path="/sorting2" element={<Sorting2 />} />
      <Route path="/backtracking" element={<Backtracking />} />
      <Route path="/searching" element={<Searching />} />
      <Route path="/binarytree" element={<Binarytree />} />
    </Routes>
  );
}

export default App;
