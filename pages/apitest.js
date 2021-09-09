import React from 'react';
import getConfig from 'next/config';
import Head from 'next/head';
import Link from 'next/link';
import { Box } from '@material-ui/core';
import { CustomButton } from '/components/uiParts/CustomButton';

const fetchApi = async (area,budget) => {
  const query = new URLSearchParams();
  const { publicRuntimeConfig } = getConfig();
  const { VERCEL_URL } = publicRuntimeConfig;

  const areaMode = ['small_area', 'middle_area', 'large_area'];
  const areaCode = ['X119', 'Y964'];
  const budgetList = ['&budget=B010,B011', '&budget=B001,B002', '&budget=B003,B008', ''];
  query.set('area', areaCode[area]);
  query.append('budget', budgetList[budget]);

  const apiUri = `http://${VERCEL_URL}api/getJson?${query.toString()}`;
  const res = await fetch(apiUri);
  const data = await res.json();
 if (!res.ok) {
   const message = data?.message ?? result;
   throw new Error(message);
 }

 return data;

};

const Example = ({ gourmet }) => {
  const [budget, setBudget] = React.useState(3);
  const [value, setValue] = React.useState(gourmet ?? '');
  const setLow = async () => {
    setBudget(0)
    const res = await fetchApi(0, budget);
    setValue(res);
  };
  return (
    <div>
      <h1>gourmet</h1>
      <div>
        <CustomButton onClick={setLow}>0~1500</CustomButton>
      </div>

      <ul>
        {value.results.shop.map((item, index) => {
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
  const res = await fetchApi(0,3);
  return {
    props: {
      gourmet: res,
    },
  };
}

export default Example;
