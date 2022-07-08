import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
// import RingLoader from "react-spinners/RingLoader";
import { Rings } from  'react-loader-spinner'

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <Rings color=" #4db5ff" height={120} width={150} />
        </div>
      ) : (
        <div>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
     

        {/* <div>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div> */}

    </>
      );
};

export default App;
