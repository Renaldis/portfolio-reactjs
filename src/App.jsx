import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume/Resume";
import Layout from "./components/Layout/Layout";
import Portfolio from "./pages/Portfolio/Portfolio";
import NavPort from "./pages/Portfolio/components/NavPort";
import AllSection from "./pages/Portfolio/pages/AllSection";
import JavascriptSection from "./pages/Portfolio/pages/JavascriptSection";
import PhpSection from "./pages/Portfolio/pages/PhpSection";

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
              <Portfolio>
                <NavPort />
              </Portfolio>
            </Layout>
          }
        >
          <Route path="all" element={<AllSection />} />
          <Route path="php" element={<JavascriptSection />} />
          <Route path="javascript" element={<PhpSection />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
