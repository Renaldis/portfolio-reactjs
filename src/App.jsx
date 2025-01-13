import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume/Resume";
import Layout from "./components/Layout/Layout";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Resume />
            </Layout>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Layout>
              <Portfolio />
            </Layout>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Layout>
              <Portfolio />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
