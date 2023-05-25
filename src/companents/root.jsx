import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Footer } from "./Footer/footer";
import { Header } from "./Header/header";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";

export const Root = () => {
  return (
    <div className="root">
      <div className="Header">
        <Header />
      </div>
      <div className="root__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};
