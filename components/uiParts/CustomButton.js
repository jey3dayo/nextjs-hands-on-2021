import React from 'react';
import Button from '@material-ui/core/Button';

export const CustomButton = ({ children, onClick = null }) => (
  <Button variant="contained" color="primary" onClick={onClick}>
    {children}
  </Button>
);

export const CustomButtonSecondary = ({ children, onClick = null }) => (
  <Button variant="contained" color="secondary" onClick={onClick}>
    {children}
  </Button>
);
