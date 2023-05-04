import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const ReviewModal = ({ open, handleClose }) => {
  const [reviewText, setReviewText] = useState('');

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  }

  const handleSaveReview = () => {
    // Add your logic to save the review
    console.log('Review saved:', reviewText);
    handleClose();
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Review</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Review"
          type="text"
          fullWidth
          multiline
          rows={4}
          value={reviewText}
          onChange={handleReviewTextChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSaveReview} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewModal;
