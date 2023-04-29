import React from 'react';
import "../../assets/styles/AppDetail.css";


function AppReview(props) {
    return (
      <div className="AppReview">
        {" "}
        {props.reviews.map((review, index) => (
          <div key={index}>
            <h2 className="AppReview-title"> {review.author} </h2>{" "}
            <p className="AppReview-text"> {review.body} </p>{" "}
            <p className="AppReview-author">
              {" "}
              {review.rating}
              stars{" "}
            </p>{" "}
          </div>
        ))}{" "}
      </div>
    );
}

export default AppReview;