import React from "react";
import "../../styles/feedbackShopCard.css";
import StarRating from "./StarRating"; // Giả sử bạn đã có component này

export default function FeedbackCard({
  avatar,
  username,
  date,
  rating,
  comment,
  images = [],
}) {
  return (
    <div className="feedback-card">
      <div className="feedback-header">
        <img src={avatar} alt="avatar" className="feedback-avatar" />
        <div className="feedback-user-info">
          <p className="feedback-username">{username}</p>
          <StarRating rating={rating} />
          <p className="feedback-date">{date}</p>
        </div>
      </div>

      <p className="feedback-comment">{comment}</p>

      {images.length > 0 && (
        <div className="feedback-images">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`feedback-img-${index}`} />
          ))}
        </div>
      )}
    </div>
  );
}
