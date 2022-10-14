import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import NavBarComp from "./components/NavBarComp/NavBarComp";
import Footer from "./components/Footer/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import MyVerticallyCenteredModal from "./components/MyVerticallyCenteredModal";
function App() {
  // const [modalShow, setModalShow] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setModalShow(true);
  //   }, 5000);
  // }, []);

  return (
    <div className="App">
      <Router>
        <NavBarComp />
        <AnimatePresence exitBeforeEnter>
          <Routes>
            {routes.map((items, index) => {
              return (
                <Route
                  path={items.link}
                  element={items.component}
                  key={index}
                />
              );
            })}
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
      {/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
    </div>
  );
}

export default App;
