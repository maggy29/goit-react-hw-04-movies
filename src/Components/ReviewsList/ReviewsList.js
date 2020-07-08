import React from "react";
import PropTypes from "prop-types";

function ReviewsList({ reviews }) {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <h4>Author: {review.author}</h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ReviewsList;
