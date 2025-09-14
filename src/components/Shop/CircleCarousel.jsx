import React, { useEffect, useState } from "react";
import "../../styles/circleCarousel.css";

const images = [
  { src: require("../../assets/shop/categories/logo_clothing.png"), label: "Hi bạn nè" },
  { src: require("../../assets/shop/categories/logo_clothing.png"), label: "Tới lượt tôi á!" },
  { src: require("../../assets/shop/categories/logo_clothing.png"), label: "Chơi với mình đi" },
  { src: require("../../assets/shop/categories/logo_clothing.png"), label: "Tui cute hông?" },
  { src: require("../../assets/shop/categories/logo_clothing.png"), label: "Mua đồ cho tui đi" },
  { src: require("../../assets/shop/categories/logo_clothing.png"), label: "Ngắm tui nè!" },
];

const CircleArcCarousel = () => {
  const radius = 250;
  const centerX = 400;
  const centerY = 250; // logo nằm dưới
  const step = 2; // bước thay đổi góc
  const minAngle = 180; // trái cùng
  const maxAngle = 0;   // phải cùng

  const [offset, setOffset] = useState(0); // góc đang dịch chuyển
  const [direction, setDirection] = useState(1); // 1: phải, -1: trái

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const next = prev + step * direction;
        if (next > minAngle || next < maxAngle - 60) {
          setDirection((d) => -d);
          return prev;
        }
        return next;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="arc-container">
      <div className="logo-center">
        <h2>CARE’S PAW</h2>
        <p>Pet Care</p>
      </div>

      {images.map((img, index) => {
        const count = images.length;
        const angleSpacing = 60 / (count - 1); // phân bố trên 60 độ (từ 180 → 120 → 60 → 0)
        const angle = minAngle - (angleSpacing * index) + offset;
        const rad = (angle * Math.PI) / 180;
        const x = centerX + radius * Math.cos(rad);
        const y = centerY + radius * Math.sin(rad);

        return (
          <div className="arc-item" key={index} style={{ top: y, left: x }}>
            <img src={img.src} alt={`pet-${index}`} />
            <div className="bubble">{img.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CircleArcCarousel;