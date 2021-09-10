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
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import { Autocomplete } from '@material-ui/lab';
import ButtonBase from '@material-ui/core/ButtonBase';

const fetchApi = async (area, budget, genre) => {
  const query = new URLSearchParams();
  const { publicRuntimeConfig } = getConfig();
  const { VERCEL_URL } = publicRuntimeConfig;
  const areaCode = ['&small_area=X119', '&middle_area=Y964'];
  const budgetList = ['&budget=B010,B011', '&budget=B001,B002', '&budget=B003,B008', ''];
  const genreList = [
    '',
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
  const [genre, setGenre] = React.useState(0);
  const [value, setValue] = React.useState(gourmet ?? '');
  const setLow = async () => {
    const select = 0;
    setBudget(select);
    console.log(budget);
    const res = await fetchApi(area, select, genre);
    console.log(res);
    setValue(res);
  };
  const setMiddle = async () => {
    const select = 1;
    setBudget(select);
    console.log(budget);
    const res = await fetchApi(area, select, genre);
    console.log(res);
    setValue(res);
  };
  const setHigh = async () => {
    const select = 2;
    setBudget(select);
    console.log(budget);
    const res = await fetchApi(area, select, genre);
    console.log(res);
    setValue(res);
  };
  const setAll = async () => {
    const select = 3;
    setBudget(select);
    console.log(budget);
    const res = await fetchApi(area, select, genre);
    console.log(res);
    setValue(res);
  };
  const setNago = async () => {
    const select = 0;
    setArea(select);
    const res = await fetchApi(select, budget, genre);
    setValue(res);
  };
  const setYambar = async () => {
    const select = 1;
    setArea(1);
    const res = await fetchApi(select, budget, genre);
    setValue(res);
  };
  const setGr = async (gr) => {
    const select = gr;
    setGenre(select);
    const res = await fetchApi(area, budget, select);
    setValue(res);
  };
  return (
    <div>
      <CustomAppBar />
      <Container>
        <Typography variant="h4">
          <Box>ジャンル</Box>
        </Typography>
        <Card variant="outlined" className={classes.root}>
          <Grid container spacing={1} className={classes.genre} justifyContent="center">
            <Grid item xs={2} className={classes.image}>
              <Box border={1} boxShadow={1} borderRadius="borderRadius">
                <Image alt="居酒屋" src="/beer.png" width={100} height={100}  onClick={() => setGr(1)}/>
                <Typography>居酒屋</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box border={1} boxShadow={1} borderRadius="borderRadius" >
                <Image alt="ダイニングバー・バル" src="/diningbar.png" width={100} height={100} onClick={() => setGr(2)}/>
                <Typography>ダイニングバー・バル</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box border={1} boxShadow={1} borderRadius="borderRadius" >
                <Image alt="創作料理" src="/creativecusine.png" width={100} height={100} onClick={() => setGr(3)}/>
                <Typography>創作料理</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box border={1} boxShadow={1} borderRadius="borderRadius" >
                <Image alt="和食" src="/japanese.png" width={100} height={100} onClick={() => setGr(4)}/>
                <Typography>和食</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box border={1} boxShadow={1} borderRadius="borderRadius" >
                <Image alt="洋食" src="/western.png" width={100} height={100} onClick={() => setGr(5)}/>
                <Typography>洋食</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box border={1} boxShadow={1} borderRadius="borderRadius" >
                <Image alt="イタリアン・フレンチ" src="/italian.png" width={100} height={100} onClick={() => setGr(6)}/>
                <Typography>イタリアン・フレンチ</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box border={1} boxShadow={1} borderRadius="borderRadius" >
                <Image alt="中華" src="/chinese.png" width={100} height={100} onClick={() => setGr(7)}/>
                <Typography>中華</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box border={1} boxShadow={1} borderRadius="borderRadius" >
                <Image alt="焼肉・ホルモン" src="/bbq.png" width={100} height={100} onClick={() => setGr(8)}/>
                <Typography>焼肉・ホルモン</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box border={1} boxShadow={1} borderRadius="borderRadius" >
                <Image alt="韓国料理" src="/korean.png" width={100} height={100} onClick={() => setGr(17)}/>
                <Typography>韓国料理</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box border={1} boxShadow={1} borderRadius="borderRadius" >
                <Image alt="アジア・エスニック料理" src="/ethnic.png" width={100} height={100} onClick={() => setGr(9)}/>
                <Typography>アジア・エスニック料理</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box border={1} boxShadow={1} borderRadius="borderRadius" >
                <Image alt="各国料理" src="/internationalcusine.png" width={100} height={100} onClick={() => setGr(10)}/>
                <Typography>各国料理</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box border={1} boxShadow={1} borderRadius="borderRadius" >
                <Image alt="カラオケ・パーティ" src="/karaoke.png" width={100} height={100} onClick={() => setGr(11)}/>
                <Typography>カラオケ・パーティ</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box border={1} boxShadow={1} borderRadius="borderRadius" >
                <Image alt="バー・カクテル" src="/cocktail.png" width={100} height={100} onClick={() => setGr(12)}/>
                <Typography>バー・カクテル</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box border={1} boxShadow={1} borderRadius="borderRadius" >
                <Image alt="ラーメン" src="/ramen.png" width={100} height={100} onClick={() => setGr(13)}/>
                <Typography>ラーメン</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box border={1} boxShadow={1} borderRadius="borderRadius" >
                <Image alt="お好み焼き・もんじゃ" src="/okonomiyaki.png" width={100} height={100} onClick={() => setGr(16)}/>
                <Typography>お好み焼き・もんじゃ</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box border={1} boxShadow={1} borderRadius="borderRadius" >
                <Image alt="カフェ・スイーツ" src="/cafe.png" width={100} height={100}onClick={() => setGr(14)} />
                <Typography>カフェ・スイーツ</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box border={1} boxShadow={1} borderRadius="borderRadius" >
                <Image alt="その他グルメ" src="/others.png" width={100} height={100} onClick={() => setGr(15)}/>
                <Typography>その他グルメ</Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
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
                        <img src={item.photo.pc.l} alt={item.className} width={200} height={200} />
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
    flexGrow: 1,
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
  genre: {
    display: 'flex',
    height: 250,
    overflow: 'auto',
  },
  image: {
    textAlign: 'center',
    flexDirection: 'column',
    boxSizing: 'border-box',
  },
});

export async function getServerSideProps() {
  // 取得テスト
  const res = await fetchApi(0, 3, 0);
  return {
    props: {
      gourmet: res,
    },
  };
}

export default Index;
