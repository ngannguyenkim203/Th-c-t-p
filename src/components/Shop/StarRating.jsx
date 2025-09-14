import React from 'react';

const StarRating = ({ rating = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const renderStars = () => {
    const stars = [];

    // ★ Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="text-warning">
          <i className="fa-solid fa-star"></i>
        </span>
      );
    }

    // ☆ Half star (nếu muốn dùng icon nửa sao thực sự, dùng fa-star-half-alt)
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-warning">
          <i className="fa-solid fa-star-half-stroke"></i>
        </span>
      );
    }

    // ☆ Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-secondary">
          <i className="fa-regular fa-star"></i>
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="d-flex align-items-center gap-1 fs-6">
      {renderStars()}
      {/* <span className="ms-2 text-muted">{rating}/5</span> */}
    </div>
  );
};

export default StarRating;
