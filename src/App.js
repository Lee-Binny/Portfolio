import React from "react";
import data from "./data"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

const App = () => {
  //ReactGA.initialize("UA-110570651-1");
  //ReactGA.pageview(window.location.pathname);

  return (
    <div className="App">
      <Header data={data.main} />
      <About data={data.main} />
      <Resume data={data.resume} />
      <Contact data={data.main} />
      <Footer data={data.main} />
    </div>
  );
}

export default App;
