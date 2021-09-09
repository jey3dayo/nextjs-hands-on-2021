import React from 'react';
import getConfig from 'next/config';
import Head from 'next/head';
import Link from 'next/link';
import { CustomButton } from '/components/uiParts/CustomButton';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CustomAppBar from '/components/uiParts/CustomAppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Image from 'next/image';

const fetchApi = async (area, budget, genre) => {
  const query = new URLSearchParams();
  const { publicRuntimeConfig } = getConfig();
  const { VERCEL_URL } = publicRuntimeConfig;
  const areaCode = ['&small_area=X119', '&middle_area=Y964'];
  const budgetList = ['&budget=B010,B011', '&budget=B001,B002', '&budget=B003,B008', ''];
  const genreList = [
    '&genre=G001',
    '&genre=G002',
    '&genre=G003',
    '&genre=G004',
    '&genre=G005',
    '&genre=G006',
    '&genre=G007',
    '&genre=G008',
    '&genre=G009',
    '&genre=G010',
    '&genre=G011',
    '&genre=G012',
    '&genre=G013',
    '&genre=G014',
    '&genre=G015',
    '&genre=G016',
    '&genre=G017',
    '',
  ];
  query.set('area', areaCode[area]);
  query.append('budget', budgetList[budget]);
  query.append('genre', genreList[genre]);

  const apiUri = `http://${VERCEL_URL}api/getJson?${query.toString()}`;
  const res = await fetch(apiUri);
  const data = await res.json();
  if (!res.ok) {
    const message = data?.message ?? result;
    throw new Error(message);
  }

  return data;
};

const Index = ({ gourmet }) => {
  const classes = useStyles();
  const [area, setArea] = React.useState(0);
  const [budget, setBudget] = React.useState();
  const [genre, setGenre] = React.useState();
  const [value, setValue] = React.useState(gourmet ?? '');
  const setLow = async () => {
    setBudget(0);
    console.log(budget);
    const res = await fetchApi(area, budget, 17);
    console.log(res);
    setValue(res);
  };
  const setMiddle = async () => {
    setBudget(1);
    console.log(budget);
    const res = await fetchApi(area, budget, 17);
    console.log(res);
    setValue(res);
  };
  const setHigh = async () => {
    setBudget(2);
    console.log(budget);
    const res = await fetchApi(area, budget, 17);
    console.log(res);
    setValue(res);
  };
  const setAll = async () => {
    setBudget(3);
    console.log(budget);
    const res = await fetchApi(area, budget, 17);
    console.log(res);
    setValue(res);
  };
  const setNago = async () => {
    setArea(0);
    const res = await fetchApi(area, budget, 17);
    setValue(res);
  };
  const setYambar = async () => {
    setArea(1);
    const res = await fetchApi(area, budget, 17);
    setValue(res);
  };
  return (
    <div>
      <CustomAppBar />
      <Container>
        <Typography variant="h4">ジャンル</Typography>
        <div>
          <CustomButton onClick={setLow}>0~1500</CustomButton>
          <CustomButton onClick={setMiddle}>1500~3000</CustomButton>
          <CustomButton onClick={setHigh}>3000~5000</CustomButton>
          <CustomButton onClick={setAll}>All</CustomButton>
        </div>
        <div>
          <CustomButton onClick={setNago}>名護</CustomButton>
          <CustomButton onClick={setYambar}>北部</CustomButton>
        </div>
        <Typography variant="h4">オススメ</Typography>
        <ul>
          {value.results.shop.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.urls.pc}>
                <Card variant="outlined" className={classes.root} borderRadius="borderRadius">
                  <Grid container>
                    <Grid item xs={10}>
                      <CardContent className={classes.details}>
                        <Typography variant="h5">{item.name}</Typography>
                        <Typography variant="body1">
                            <p>{item.genre.name}</p>
                            <p>{item.catch}</p>
                            <p>{item.access}</p>
                        </Typography>
                      </CardContent>
                    </Grid>
                    <Grid item xs={2}>
                      <img src={item.photo.pc.l} alt={item.className}  width={200} height={200} />
                    </Grid>
                  </Grid>
                </Card>
                </Link>
              </li>
            );
          })}

        </ul>
      </Container>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
});

export async function getServerSideProps() {
  // 取得テスト
  const res = await fetchApi(0, 3, 17);
  return {
    props: {
      gourmet: res,
    },
  };
}

export default Index;
