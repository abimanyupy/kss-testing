import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import bgKss from '../img/bg-kss.png';
import frameKss from '../img/frame-kss.png';

export default function Home() {
    const navigate = useNavigate();
    return (
      <div
        className="home-bg bg-image"
        id="home"
        style={{
          backgroundImage: `url(${bgKss})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="home-overlay">
          <header className="home-content">
            <img
              src={frameKss}
              alt="logo"
              className="home-logo"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/info')}
            />
            <h1 className="home-title">KSS Undercarriage</h1>
            <p className="home-subtitle">
              KSS is a brand by PT Multi Power Aditama, established in 2009. With almost 20 years of experience, KSS provides strong and reliable undercarriage parts for the mining and construction industries. Known for durability and precision, KSS is a trusted partner for heavy equipment performance and efficiency.
            </p>
          </header>
        </div>
      </div>
    )
}