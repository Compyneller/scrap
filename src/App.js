import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import NavBarComp from "./components/NavBarComp/NavBarComp";
import Footer from "./components/Footer/Footer";
import { AnimatePresence, motion } from "framer-motion";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBarComp />
        <Routes>
          {routes.map((items, index) => {
            return (
              <Route path={items.link} element={items.component} key={index} />
            );
          })}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
