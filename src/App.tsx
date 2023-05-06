import { Route, Routes } from 'react-router-dom';
import Home from "./components/homepage/Home";
import Navbar from "./components/navigation/Navbar";
import Classes from './components/classespage/Classes';
import Contact from './components/contactpage/Contact';
import Store from './components/storepage/Store';
import { useLayoutEffect } from 'react';
import { useLocation } from "react-router-dom";

function useScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 50);
  }, [pathname]);
}

const App = () => {

  useScrollToTop();

  return (
      <Routes >
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="classes" element={<Classes />} />
          <Route path="contact" element={<Contact />} />
          <Route path="store" element={<Store />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
  )
}

export default App
