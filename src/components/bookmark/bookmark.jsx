import React from 'react';
import "../../assets/styles/AppDetail.css"
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
      disableRipple
      disableTouchRipple
      onClick={handleBookmarkClick}
    >
      <button className='button'>
      <BookmarkBorderIcon/>
        Add to wishlist
      </button>
    </IconButton>
  )};

export default BookmarkButton;
