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
  const [cart, setCart] = useState([]);
  const [imageInfo, setImageInfo] = useState({ id: 0, link: "" });
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(12);
  const [payment, showPayment] = useState(false);

  // I'm not sure if it's ok, have to check it
  setTimeout(function() {
    if (document.querySelector("#on") == null) {
      const firstPage = document.querySelector(".item1");
      firstPage.id = "on";
    }
  }, 800);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      axios.get("Images.json").then(res => setImages(res.data));
      setLoading(false);
    };
    fetchImages();
  }, []);

  const paginate = pageNumber => {
    const page = document.querySelector(`.item${currentPage}`);
    page.id = " ";
    setCurrentPage(pageNumber);
    const nextPage = document.querySelector(`.item${pageNumber}`);
    nextPage.id = "on";
  };

  const togglePaymentPopUp = (id, link) => {
    showPayment(!payment);
    if (link !== undefined) {
      if (payment === false) {
        if (arrIncludes(cart, id) === false) {
          setCart([...cart, { id, link }]);
        }
      }
    }
  };

  const arrIncludes = (arr, id) => {
    for (let img of arr) {
      if (img.id === id) {
        return true;
      }
    }
    return false;
  };

  const addToCart = (id, link) => {
    const output = arrIncludes(cart, id);
    if (output === false) {
      setCart([...cart, { id, link }]);
    } else if (output === true) {
      alert("You already have that item in your cart!");
    }
  };

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

  return (
    <div className="App">
      <div className="content-wrap"></div>
      <Particles className="particles" params={params} />
      <Navbar togglePaymentPopUp={togglePaymentPopUp} />
      <Payment
        imageInfo={imageInfo}
        payment={payment}
        togglePaymentPopUp={togglePaymentPopUp}
        cart={cart}
      />
      <ImagesList
        togglePaymentPopUp={togglePaymentPopUp}
        Images={currentImages}
        loading={loading}
        addToCart={addToCart}
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
