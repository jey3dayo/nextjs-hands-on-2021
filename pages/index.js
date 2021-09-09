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
import { Autocomplete } from '@material-ui/lab';

const Index = () => {
  const classes = useStyles();

  return (
    <div>
      <CustomAppBar />
      <Container>
        <Typography variant="h4">ジャンル</Typography>
        <Card variant="outlined" className={classes.root}>
        <Grid container spacing={1} className={classes.genre} justifyContent="center">
          <Grid item xs={2} className={classes.image}>
            <Image alt="居酒屋" src="/beer.png" width={100} height={100} />
            <Typography>居酒屋</Typography>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Image alt="ダイニングバー・バル" src="/diningbar.png" width={100} height={100} />
            <Typography>ダイニングバー・バル</Typography>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Image alt="創作料理" src="/creativecusine.png" width={100} height={100} />
            <Typography>創作料理</Typography>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Image alt="和食" src="/japanese.png" width={100} height={100} />
            <Typography>和食</Typography>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Image alt="洋食" src="/western.png" width={100} height={100} />
            <Typography>洋食</Typography>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Image alt="イタリアン・フレンチ" src="/italian.png" width={100} height={100} />
            <Typography>イタリアン・フレンチ</Typography>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Image alt="中華" src="/chinese.png" width={100} height={100} />
            <Typography>中華</Typography>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Image alt="焼肉・ホルモン" src="/bbq.png" width={100} height={100} />
            <Typography>焼肉・ホルモン</Typography>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Image alt="韓国料理" src="/korean.png" width={100} height={100} />
            <Typography>韓国料理</Typography>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Image alt="アジア・エスニック料理" src="/ethnic.png" width={100} height={100} />
            <Typography>アジア・エスニック料理</Typography>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Image alt="各国料理" src="/internationalcusine.png" width={100} height={100} />
            <Typography>各国料理</Typography>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Image alt="カラオケ・パーティ" src="/karaoke.png" width={100} height={100} />
            <Typography>カラオケ・パーティ</Typography>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Image alt="バー・カクテル" src="/cocktail.png" width={100} height={100} />
            <Typography>バー・カクテル</Typography>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Image alt="ラーメン" src="/ramen.png" width={100} height={100} />
            <Typography>ラーメン</Typography>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Image alt="お好み焼き・もんじゃ" src="/okonomiyaki.png" width={100} height={100} />
            <Typography>お好み焼き・もんじゃ</Typography>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Image alt="カフェ・スイーツ" src="/cafe.png" width={100} height={100} />
            <Typography>カフェ・スイーツ</Typography>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Image alt="その他グルメ" src="/others.png" width={100} height={100} />
            <Typography>その他グルメ</Typography>
          </Grid>
        </Grid>
        </Card>
        <Typography variant="h4">オススメ</Typography>
        <Card variant="outlined" className={classes.root} borderRadius="borderRadius">
          <Grid container>
            <Grid item xs={10}>
              <CardContent className={classes.details}>
                <Typography variant="h5">店名</Typography>
                <Typography variant="body1">
                  お店の情報など
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={2}>
              <Image alt="店画像" src="/logo3.png" width={200} height={200} />
            </Grid>
          </Grid>
        </Card>
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
  genre: {
    display: 'flex',
    height: 250,
    overflow: 'auto',
  },
  image: {
    textAlign: 'center',
    flexDirection: 'column',
  },
});

export default Index;
