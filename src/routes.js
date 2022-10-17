import About from "./pages/About";
import ContactUsPage from "./pages/ContactUsPage";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Tc from "./pages/Tc";

export const routes = [
  {
    component: <Home />,
    link: "/",
  },
  {
    component: <ContactUsPage />,
    link: "/contact-us",
  },
  {
    component: <About />,
    link: "/about",
  },
  {
    component: <PrivacyPolicy />,
    link: "/pp",
  },
  {
    component: <Tc />,
    link: "/tc",
  },
];
