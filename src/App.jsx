// import { useState } from 'react'

import { Header } from "./components/Header";
import { Service } from "./components/Service";
import { Welcome } from "./components/Welcome";
import { Project } from "./components/Project";
import { Customer } from "./components/Customer";
import { Team } from "./components/Team";
import { Subscribe } from "./components/Subscribe";
import { Links } from "./components/Links";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Header />
          <Welcome />
          <Service/>
          <Project/>
          <Customer/>
          <Team/>
          <Subscribe />
          <Links/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
