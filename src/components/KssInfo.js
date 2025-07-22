import React from "react";
import { useNavigate } from "react-router-dom";
import "./KssInfo.css";
import bgKss from '../img/bg-kss.png';
import logoMpa from '../img/logo-mpa-topleft.png';
import frameKss from '../img/frame-kss.png';

export default function KssInfo() {
  const navigate = useNavigate();

  return (
    <div className="kssinfo-root">
      <div
        className="kssinfo-top-bg"
        style={{
          backgroundImage: `url(${bgKss})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "240px",
          position: "relative",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <img
          src={logoMpa}
          alt="Multi Power"
          className="kssinfo-logo-mpa"
        />
        <span className="kssinfo-moreinfo">Click For More Info</span>
        <img
          src={frameKss}
          alt="KSS Logo"
          className="kssinfo-logo-center"
          style={{ cursor: "pointer" }}
          onClick={() => navigate('/products')}
        />
      </div>
      <div className="kssinfo-content">
        <h1 className="kssinfo-title">KSS UNDERCARRIAGE</h1>
        <div className="kssinfo-desc">
          Engineered with precision and built for performance, with over 15
          years in Indonesia, <b>KSS Undercarriage</b> has earned its place as a
          trusted name in our mining and agriculture industries. Developed with
          insights from Japanese engineering excellence, <b>KSS</b> delivers
          durable, high-performance undercarriage solutions that withstand the
          toughest environments. From excavators to bulldozers, <b>KSS</b> is
          the preferred brand for operators seeking maximum uptime, reduced cost
          per hour, and consistent reliability in their heavy equipment
          operations.{" "}
          <b>Exclusively Available in Indonesia from Multi Power Aditama</b>
        </div>
      </div>
    </div>
  );
}
