import React, { useState } from 'react';
import '../../styles/productGallery.css';

export default function ProductGallery({ images, selected, onSelect }) {
  const [currentIdx, setCurrentIdx] = useState(images.indexOf(selected) || 0);

  const goPrev = () => {
    const newIdx = (currentIdx - 1 + images.length) % images.length;
    setCurrentIdx(newIdx);
    onSelect(images[newIdx]);
  };

  const goNext = () => {
    const newIdx = (currentIdx + 1) % images.length;
    setCurrentIdx(newIdx);
    onSelect(images[newIdx]);
  };

  return (
    <div className="product-gallery">
      <div className="image-wrapper">
        <button className="arrow left" onClick={goPrev}>←</button>

        <img src={selected} alt="Selected" className="main-image" />

        <button className="arrow right" onClick={goNext}>→</button>
      </div>

      <div className="thumbnail-list">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx}`}
            className={`thumbnail ${selected === img ? 'active' : ''}`}
            onClick={() => {
              onSelect(img);
              setCurrentIdx(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
}
