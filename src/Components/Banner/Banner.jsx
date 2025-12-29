import { useState, useEffect } from "react";
import banner1 from "../../assets/11.jpeg";
import banner2 from "../../assets/12.jpeg";
import banner3 from "../../assets/14.jpeg";
import "./Banner.css";

const slides = [
  {
    image: banner1,
    title: "Welcome to Divine Heritage CMU",
    text: "Your trusted partner in cooperative excellence. We empower our members through sustainable growth and financial support."
  },
  {
    image: banner2,
    title: "Empowering Financial Growth",
    text: "We provide reliable financial services designed to help individuals and businesses thrive together."
  },
  {
    image: banner3,
    title: "Building a Stronger Community",
    text: "Through cooperation, transparency, and trust, we build a better future for all our members."
  }
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000); // change every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="container fade"
      style={{ backgroundImage: `url(${slides[current].image})` }}
    >
      <div className="overlay"></div>

      <div className="content">
        <h1>{slides[current].title}</h1>
        <p>{slides[current].text}</p>
        <button className="hero-btn">Join Us Today</button>
      </div>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
