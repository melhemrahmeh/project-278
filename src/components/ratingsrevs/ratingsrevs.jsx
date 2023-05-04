import React, { useState } from 'react';
import ReviewModal from '../modal/revmodal'; // Assuming you have a ReviewModal component

const RatingsAndReviews = () => {
    const [reviews, setReviews] = useState([]); // Reviews data
    const [showModal, setShowModal] = useState(false); // Modal state
    const [selectedReview, setSelectedReview] = useState(null); // Selected review state

    // Function to handle opening the modal
    const handleOpenModal = (review) => {
        setSelectedReview(review);
        setShowModal(true);
    }

    // Function to handle closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
    }

    // Function to handle submitting a review
    const handleSubmitReview = (newReview) => {
        // Update reviews state with the new review
        setReviews([...reviews, newReview]);
        // Close the modal
        handleCloseModal();
    }

    return ( <div>
            <h1> Ratings and Reviews </h1> 
            <ul> {
                reviews.map(review => ( <li key = { review.id }>
                    <div>
                         Rating: { review.rating } 
                    </div> 
                    <div>
                         Review: { review.review } 
                    </div> 
                    <button onClick = {
                        () => handleOpenModal(review)
                    } > Edit </button> </li>
                ))
            } 
            </ul> 
            <button className="button" onClick = {
                () => handleOpenModal(null)
            } > Add Review </button> {
            showModal && ( <ReviewModal review = { selectedReview }
                onSubmit = { handleSubmitReview }
                onClose = { handleCloseModal }
                />
            )
        }
        {showModal && (
                <ReviewModal
                    open={showModal}
                    handleClose={handleCloseModal}
                />
            )} 
        
        </div>
);
}

export default RatingsAndReviews;