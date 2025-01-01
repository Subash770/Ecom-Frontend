import React, { useState } from 'react';
import './Review.css';

function Review({ productName }) {
  const [reviews, setReviews] = useState([
    { user: 'Alice', rating: 5, comment: 'Amazing product! Highly recommend.' },
    { user: 'Bob', rating: 4, comment: 'Great quality, worth the price.' },
  ]);
  const [newReview, setNewReview] = useState({ user: '', rating: '', comment: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (newReview.user && newReview.rating && newReview.comment) {
      setReviews([...reviews, newReview]);
      setNewReview({ user: '', rating: '', comment: '' });
    }
  };

  return (
    <div className="review-container">
      <h2>Reviews for {productName}</h2>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <h4>{review.user}</h4>
            <p>Rating: ⭐{review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
      <form className="review-form" onSubmit={handleAddReview}>
        <h3>Add a Review</h3>
        <input
          type="text"
          name="user"
          value={newReview.user}
          placeholder="Your Name"
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="rating"
          value={newReview.rating}
          placeholder="Rating (1-5)"
          onChange={handleInputChange}
          min="1"
          max="5"
          required
        />
        <textarea
          name="comment"
          value={newReview.comment}
          placeholder="Write your review..."
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default Review;
