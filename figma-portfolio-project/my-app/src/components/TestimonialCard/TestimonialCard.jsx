import React from "react";
import "./TestimonialCard.css";
import placeholderImage from "../../assets/placeholder.jpg"; // Use a black placeholder image

const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img src={placeholderImage} alt="Profile" className="testimonial-image" />
        <div className="testimonial-info">
          <h3 className="testimonial-name">Jayesh Patil</h3>
          <p className="testimonial-role">CEO, Lirante</p>
        </div>
      </div>
      <div className="testimonial-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="star">★</span>
        ))}
        <span className="rating-number">5.0</span>
      </div>
      <p className="testimonial-review">
        consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis. Sed lobortis orci elementum egestas lobortis. Sed lobortis orci elementum egestas lobortis.
      </p>
      <div className="testimonial-quote-icon">”</div>
    </div>
  );
};

export default TestimonialCard;
