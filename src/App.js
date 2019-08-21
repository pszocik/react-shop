import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ImagesList from "./Components/ImagesList/ImagesList";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ImagesList />
      <Footer />
    </div>
  );
};

export default App;
