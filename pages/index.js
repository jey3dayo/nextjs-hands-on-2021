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

const Index = () => {
  const classes = useStyles();

  return (
    <div>
      <CustomAppBar />
      <Container>
        <Typography variant="h4"><Box>ジャンル</Box></Typography>
        <Card variant="outlined" className={classes.root}>
        <Grid container spacing={1} className={classes.genre} justifyContent="center">
          <Grid item xs={2} className={classes.image}>
            <Box border={1} boxShadow={1} borderRadius="borderRadius">
            <Image alt="居酒屋" src="/beer.png" width={100} height={100} />
            <Typography>居酒屋</Typography>
            </Box>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Box border={1} boxShadow={1} borderRadius="borderRadius">
            <Image alt="ダイニングバー・バル" src="/diningbar.png" width={100} height={100} />
            <Typography>ダイニングバー・バル</Typography>
            </Box>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Box border={1} boxShadow={1} borderRadius="borderRadius">
            <Image alt="創作料理" src="/creativecusine.png" width={100} height={100} />
            <Typography>創作料理</Typography>
            </Box>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Box border={1} boxShadow={1} borderRadius="borderRadius">
            <Image alt="和食" src="/japanese.png" width={100} height={100} />
            <Typography>和食</Typography>
            </Box>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Box border={1} boxShadow={1} borderRadius="borderRadius">
            <Image alt="洋食" src="/western.png" width={100} height={100} />
            <Typography>洋食</Typography>
            </Box>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Box border={1} boxShadow={1} borderRadius="borderRadius">
            <Image alt="イタリアン・フレンチ" src="/italian.png" width={100} height={100} />
            <Typography>イタリアン・フレンチ</Typography>
            </Box>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Box border={1} boxShadow={1} borderRadius="borderRadius">
            <Image alt="中華" src="/chinese.png" width={100} height={100} />
            <Typography>中華</Typography>
            </Box>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Box border={1} boxShadow={1} borderRadius="borderRadius">
            <Image alt="焼肉・ホルモン" src="/bbq.png" width={100} height={100} />
            <Typography>焼肉・ホルモン</Typography>
            </Box>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Box border={1} boxShadow={1} borderRadius="borderRadius">
            <Image alt="韓国料理" src="/korean.png" width={100} height={100} />
            <Typography>韓国料理</Typography>
            </Box>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Box border={1} boxShadow={1} borderRadius="borderRadius">
            <Image alt="アジア・エスニック料理" src="/ethnic.png" width={100} height={100} />
            <Typography>アジア・エスニック料理</Typography>
            </Box>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Box border={1} boxShadow={1} borderRadius="borderRadius">
            <Image alt="各国料理" src="/internationalcusine.png" width={100} height={100} />
            <Typography>各国料理</Typography>
            </Box>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Box border={1} boxShadow={1} borderRadius="borderRadius">
            <Image alt="カラオケ・パーティ" src="/karaoke.png" width={100} height={100} />
            <Typography>カラオケ・パーティ</Typography>
            </Box>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Box border={1} boxShadow={1} borderRadius="borderRadius">
            <Image alt="バー・カクテル" src="/cocktail.png" width={100} height={100} />
            <Typography>バー・カクテル</Typography>
            </Box>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Box border={1} boxShadow={1} borderRadius="borderRadius">
            <Image alt="ラーメン" src="/ramen.png" width={100} height={100} />
            <Typography>ラーメン</Typography>
            </Box>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Box border={1} boxShadow={1} borderRadius="borderRadius">
            <Image alt="お好み焼き・もんじゃ" src="/okonomiyaki.png" width={100} height={100} />
            <Typography>お好み焼き・もんじゃ</Typography>
            </Box>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Box border={1} boxShadow={1} borderRadius="borderRadius">
            <Image alt="カフェ・スイーツ" src="/cafe.png" width={100} height={100} />
            <Typography>カフェ・スイーツ</Typography>
            </Box>
          </Grid>
          <Grid item xs={2} className={classes.image}>
            <Box border={1} boxShadow={1} borderRadius="borderRadius">
            <Image alt="その他グルメ" src="/others.png" width={100} height={100} />
            <Typography>その他グルメ</Typography>
            </Box>
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

export default Index;
