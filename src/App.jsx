import { useState } from "react";
import "./App.css";
import Header from "./Pages/Header";
import Nav from "./components/Nav";
import Mascot from "./Pages/Mascot";
import Sponsor from "./components/Sponsor";
import Pendaftaran from "./Pages/Pendaftaran";
import Footer from "./Pages/Footer";
function App() {
  return (
    <>
      <div className="bg-primary-background h-full">
        <Nav />
        <Header />
        <Mascot />
        <Sponsor />
        <Pendaftaran />
        <Footer />
      </div>
    </>
  );
}

export default App;
