import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume/Resume";
import Layout from "./components/Layout/Layout";
import Portfolio from "./pages/Portfolio/Portfolio";
import NavPort from "./pages/Portfolio/components/NavPort";
import AllSection from "./pages/Portfolio/pages/AllSection";
import JavascriptSection from "./pages/Portfolio/pages/JavascriptSection";
import PhpSection from "./pages/Portfolio/pages/PhpSection";
import GlobalProvider from "./components/context/GlobalProvider";
import FigmaSection from "./pages/Portfolio/pages/FigmaSection";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <GlobalProvider>
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
                <Portfolio>
                  <NavPort />
                </Portfolio>
              </Layout>
            }
          >
            <Route path="all" element={<AllSection />} />
            <Route path="javascript" element={<JavascriptSection />} />
            <Route path="php" element={<PhpSection />} />
            <Route path="figma" element={<FigmaSection />} />
          </Route>
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
