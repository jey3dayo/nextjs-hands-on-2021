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
  const query = new URLSearchParams();

  const { serverRuntimeConfig } = getConfig();
  const { HOTPEPPER_API_KEY } = serverRuntimeConfig;

  const { publicRuntimeConfig } = getConfig();
  const { VERCEL_URL } = publicRuntimeConfig;

  const areaMode = ['small_area', 'middle_area', 'large_area'];
  const areaCode = ['X119', 'Y964'];
  query.set('area', areaCode[0]);
  const apiUrl = `http://${VERCEL_URL}api/getJson?${query.toString()}`;
  const res = await fetch(apiUrl);
  const data = await res.json();

  return {
    props: {
      gourmet: data,
    },
  };
}

export default Example;
