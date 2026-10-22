import { useState } from "react";
import "./App.css";
import Header from "./Pages/Header";
import Nav from "./components/Nav";
import Mascot from "./Pages/Mascot";
import Sponsor from "./components/Sponsor";
import Pendaftaran from "./Pages/Pendaftaran";
import Footer from "./Pages/Footer";
import Header2 from "./Pages/Header-2";
import MemperkenalkanClassiic from "./Pages/MemperkenalkanClassiic";
function App() {
  return (
    <>
      <div className="bg-primary-background h-full">
        <Nav />
        <Header />
        <Header2 />
        <MemperkenalkanClassiic />
        <Mascot />

        <Sponsor />
        <div id="pendaftaran">
          <Pendaftaran />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
