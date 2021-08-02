import React from 'react';
import Button from '@material-ui/core/Button';

export const CustomButton = ({ children, onClick = null, ...props }) => (
  <Button variant="contained" color="primary" onClick={onClick} {...props}>
    {children}
  </Button>
);

export const CustomButtonSecondary = ({ children, onClick = null, ...props }) => (
  <Button variant="contained" color="secondary" onClick={onClick} {...props}>
    {children}
  </Button>
);
