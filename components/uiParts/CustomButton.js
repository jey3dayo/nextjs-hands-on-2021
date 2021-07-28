import React from 'react';
import Button from '@material-ui/core/Button';

export const CustomButton = ({ children }) => (
  <Button variant="contained" color="primary">
    {children}
  </Button>
);

export const CustomButtonSecondary = ({ children }) => (
  <Button variant="contained" color="secondary">
    {children}
  </Button>
);
