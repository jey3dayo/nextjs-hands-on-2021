import React from 'react';
import getConfig from 'next/config';
import Head from 'next/head';
import Link from 'next/link';

const Example = ({ gourmet }) => {
  return (
    <div>
      <h1>gourmet</h1>

      <ul>
        {gourmet.results.shop.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.urls.pc}>
                <a>
                  <div>
                    <img src={item.photo.pc.l} alt={item.name} />
                    {item.name}
                    <span>{item.genre.name}</span>
                    <span>{item.catch}</span>
                    <p> {item.access}</p>
                  </div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// export async function getStaticProps() {
export async function getServerSideProps() {
  // 取得テスト
  const { serverRuntimeConfig } = getConfig();
  const { HOTPEPPER_API_KEY } = serverRuntimeConfig;
  const gourmetUrl = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${HOTPEPPER_API_KEY}&middle_area=Y964&format=json`;
  const res = await fetch(gourmetUrl);
  const data = await res.json();

  return {
    props: {
      gourmet: data,
    },
  };
}

export default Example;
