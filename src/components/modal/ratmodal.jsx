import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AppReview from '../app review/appreview';

const RatModal = ({ open, handleClose }) => {
    const reviews = [{
        author: "John Smith",
        body: "This app is amazing! I can't believe how easy it is to use.",
        rating: 5,
    },
    {
        author: "Jane Doe",
        body: "I downloaded this app and it completely changed my life. Thank you!",
        rating: 4,
    },
];

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>All Reviews</DialogTitle>
      <DialogContent>
        <AppReview reviews={reviews} />{" "}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RatModal;
