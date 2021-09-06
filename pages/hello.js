import React from 'react';
import Link from 'next/link';

const Hello = () => {
  return (
  <div>
    <div>Welcome to Next.js!</div>
    <Link href="/about">about</Link>
    </div>
  );
};

export default Hello;
