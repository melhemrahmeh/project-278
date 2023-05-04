import React, { useState } from 'react';
import InfoModal from '../modal/dmodal';
import ArrowButton from "../icon/arrow";


const InfoAndReviews = () => {
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
            } ><ArrowButton/></button> {
            showModal && ( <InfoModal review = { selectedReview }
                onSubmit = { handleSubmitReview }
                onClose = { handleCloseModal }
                />
            )
        }
        {showModal && (
                <InfoModal
                    open={showModal}
                    handleClose={handleCloseModal}
                />
            )} 
        
        </div>
);
}

export default InfoAndReviews;