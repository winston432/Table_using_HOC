// src/hocs/isLoading.jsx
import { CircularProgress } from '@mui/material';
import React, { useState } from 'react';

function isLoading(Component) {
  return function isLoading({ isLoading, ...props }) {
    if (isLoading) {
      return <CircularProgress/>
    }
    return <Component {...props} />;
  };
}

export default isLoading;