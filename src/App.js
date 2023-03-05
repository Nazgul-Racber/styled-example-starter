import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./companents/footer/Footer";
import Nav from "./companents/nav/Nav";
import Contact from "./companents/pages/Contact";
import Home from "./companents/pages/Home";
import NotFound from "./companents/pages/NotFound";
import People from "./companents/pages/People";
import Projects from "./companents/pages/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
