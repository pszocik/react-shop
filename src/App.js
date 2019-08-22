import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./Components/Navbar/Navbar";
import ImagesList from "./Components/ImagesList/ImagesList";
import Footer from "./Components/Footer/Footer";
import Particles from "react-particles-js";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(12);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      // const res =
      axios.get("Images.json").then(res => setImages(res.data));
      setLoading(false);
    };
    fetchImages();
  }, []);

  const indexOfTheLastImage = currentPage * imagesPerPage;
  const indexOfTheFirstImage = indexOfTheLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfTheFirstImage, indexOfTheLastImage);

  const params = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out"
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        }
      },
      modes: {
        bubble: {
          distance: 250,
          duration: 2,
          size: 0,
          opacity: 0
        },
        repulse: {
          distance: 400,
          duration: 4
        }
      }
    }
  };

  return (
    <div className="App">
      <Particles className="particles" params={params} />
      v2.7.0
      <Navbar />
      <ImagesList Images={currentImages} />
      <Footer />
    </div>
  );
};

export default App;
