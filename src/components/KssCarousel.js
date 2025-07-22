import React, { useState } from "react";
import "./KssCarousel.css";

// Import gambar dari src/img
import image1 from "../img/Image-1.png";
import image2 from "../img/Image-2.png";
import image3 from "../img/Image-3.png";
import image4 from "../img/Image-4.png";
import image5 from "../img/Image-5.png";
import image6 from "../img/Image-6.png";
import image7 from "../img/Image-7.png";
import image8 from "../img/Image-8.png";
import logoKss from "../img/logo-kss.png";

const images = [
  { src: image1, title: "KSS Track A", desc: "model-1237/123" },
  { src: image2, title: "KSS Track B", desc: "model-1237/ABC" },
  { src: image3, title: "KSS Track C", desc: "model-1237/ASD" },
  { src: image4, title: "KSS Track D", desc: "model-1237/OKE" },
  { src: image5, title: "KSS Track E", desc: "model-1237/EEE" },
  { src: image6, title: "KSS Track F", desc: "model-1237/FFF" },
  { src: image7, title: "KSS Track G", desc: "model-1237/GGG" },
  { src: image8, title: "KSS Track H", desc: "model-1237/HHH" },
];

export default function KssCarousel() {
  const cardsPerPage = 4;
  const totalPages = Math.ceil(images.length / cardsPerPage);
  const [page, setPage] = useState(0);

  const prev = () => setPage((page + totalPages - 1) % totalPages);
  const next = () => setPage((page + 1) % totalPages);

  const startIdx = page * cardsPerPage;
  const visibleImages = images.slice(startIdx, startIdx + cardsPerPage);

  return (
    <div className="carousel-root">
      <h1 className="carousel-title">EXPLORE OUR PRODUCTS</h1>
      <div className="carousel-tabs">
        <button className="carousel-tab active">BULLDOZER</button>
        <button className="carousel-tab">EXCAVATOR</button>
        <button className="carousel-tab">OUR SUPPORTS</button>
        <button className="carousel-tab">OUR CLIENTS</button>
        <button className="carousel-tab">TESTIMONIALS</button>
      </div>
      <div className="carousel-slider">
        <button className="carousel-arrow left" onClick={prev}>
          &lt;
        </button>
        <div className="carousel-cards">
          {visibleImages.map((img, i) => (
            <div className="carousel-card" key={startIdx + i}>
              <div className="carousel-card-header">
                <img src={logoKss} alt="KSS" className="carousel-card-logo" />
              </div>
              <img
                src={img.src}
                alt={img.title}
                className="carousel-card-img"
              />
              <div className="carousel-card-title">{img.title}</div>
              <div className="carousel-card-desc">{img.desc}</div>
              <div className="carousel-card-valid">
                Valid Until: <span className="carousel-card-date">Date</span>
              </div>
              <div className="carousel-card-footer">KSS Undercarriage</div>
            </div>
          ))}
        </div>
        <button className="carousel-arrow right" onClick={next}>
          &gt;
        </button>
      </div>
      <button
        className="carousel-back"
        onClick={() => (window.location.href = "/info")}
      >
        Back
      </button>
    </div>
  );
}
