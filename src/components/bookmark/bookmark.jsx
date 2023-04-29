import React from 'react';
import "../../assets/styles/AppDetail.css";
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const BookmarkButton = () => {
  // Handle bookmark button click event
  const handleBookmarkClick = () => {
    // Add your bookmark logic here
    console.log('Bookmark button clicked!');
  }

  return (
    <IconButton
      aria-label="Bookmark"
      color="inherit"
      onClick={handleBookmarkClick}
    >
      <BookmarkBorderIcon />
      <p className='wish'>Add to Wishlist</p>
    </IconButton>
  );
};

export default BookmarkButton;
