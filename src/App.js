import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Payment from "./Components/Payment/Payment";
import Navbar from "./Components/Navbar/Navbar";
import ImagesList from "./Components/ImagesList/ImagesList";
import Footer from "./Components/Footer/Footer";
import Particles from "react-particles-js";
import Pagination from "./Components/Pagination/Pagination";

const App = () => {
  const [images, setImages] = useState([]);
  const [id, setId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(12);
  const [payment, showPayment] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setTimeout(function() {
        axios.get("Images.json").then(res => setImages(res.data));
      }, 1000);

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
          speed: 6,
          size_min: 0.5
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: "bottom",
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

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const paymentPopUp = id => {
    showPayment(!payment);
    setId(id);
  };

  return (
    <div className="App">
      <div className="content-wrap"></div>
      <Particles className="particles" params={params} />
      <Navbar />
      <Payment id={id} payment={payment} paymentPopUp={paymentPopUp} />
      <ImagesList
        paymentPopUp={paymentPopUp}
        Images={currentImages}
        loading={loading}
      />
      <Pagination
        imagesPerPage={imagesPerPage}
        totalImages={images.length}
        paginate={paginate}
      />
      <div />
      <Footer />
    </div>
  );
};

export default App;
