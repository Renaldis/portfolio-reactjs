import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume/Resume";
import Navbarr from "./components/Header/Navbarr";

function App() {
  return (
    <Router>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
