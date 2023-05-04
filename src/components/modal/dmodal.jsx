import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const InfoModal = ({ open, handleClose }) => {

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Additional Information</DialogTitle>
      <DialogContent>
        <p>Here is some additional information that is only shown once you press the modal button on your webpage.</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoModal;
