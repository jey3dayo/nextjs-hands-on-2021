import React from 'react';
import getConfig from 'next/config';

const Example = ({ gourmet }) => {
  return (
    <div>
      <h1>gourmet</h1>
      <div>{JSON.stringify(gourmet)}</div>
    </div>
  );
};

// データ取得準備
// getServerSideProps
export async function getServerSideProps() {
  const { publicRuntimeConfig } = getConfig();
  const { HOST } = publicRuntimeConfig;

  const res = await fetch(`${HOST}/api/gourmet`);
  const data = await res.json();

  return {
    props: {
      gourmet: data,
    },
  };
}

export default Example;
