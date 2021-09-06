import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

const About = () => {
  return (
    <>
      <div>about page</div>
      <Link href="/">Home</Link>
      <br></br>

      <Button variant="contained" color="primary">
        Hello!
      </Button>
    </>
  );
};

export default About;
