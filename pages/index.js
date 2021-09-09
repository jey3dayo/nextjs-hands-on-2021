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

const Index = () => {
  const classes = useStyles();

  return (
    <div>
      <CustomAppBar />
      <Container>
        <Typography variant="h4">ジャンル</Typography>

        <Typography variant="h4">オススメ</Typography>
        <Card variant="outlined" className={classes.root} borderRadius="borderRadius">
          <Grid container >
            <Grid item xs={10}>
            <CardContent className={classes.details}>
              <Typography variant="h5">お店情報</Typography>
              <Typography variant="body1">
                aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaa aaaaa aaaaa aaaaaa aaaaa aaaa a aaaaaaaaaaaaaaaaa aaaaaa aaaa aaaaaaa
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
});

export default Index;
