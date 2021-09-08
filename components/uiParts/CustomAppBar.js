import getConfig from 'next/config';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import logo from 'Logo/logo2.png';

const { publicRuntimeConfig } = getConfig();
const { APP_NAME } = publicRuntimeConfig;

const CustomAppBar = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton size="medium" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <img src={'https://imgfp.hotp.jp/IMGH/18/33/P038071833/P038071833_69.jpg'} alt="ダミーロゴ" />
      {/* <img src={logo} width="50" height="50"/> */}
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {APP_NAME}
      </Typography>
      <Grid container spacing={2} justifyContent="flex-end" alignItems="flex-end">
        <Grid>
          <Box fontSize={18}>ジャンル</Box>
        </Grid>
        <Grid xs={3}>
          <NativeSelect>
            <option >すべて</option>
            <option>居酒屋</option>
            <option>ダイニングバー・バル</option>
            <option>創作料理</option>
            <option>和食</option>
            <option>洋食</option>
            <option>イタリアン・フレンチ</option>
            <option>中華</option>
            <option>焼肉・ホルモン</option>
            <option>韓国料理</option>
            <option>アジア・エスニック料理</option>
            <option>各国料理</option>
            <option>カラオケ・パーティ</option>
            <option>バー・カクテル</option>
            <option>ラーメン</option>
            <option>お好み焼き・もんじゃ</option>
            <option>カフェ・スイーツ</option>
            <option>その他グルメ</option>
          </NativeSelect>
        </Grid>
        <Grid>
          <Box fontSize={18}>価格帯</Box>
        </Grid>
        <Grid xs={3}>
          <NativeSelect>
            <option>すべて</option>
            <option>~500円</option>
            <option>501円~1000円</option>
            <option>1001円~1500円</option>
            <option>1501円~2000円</option>
            <option>2001円~3000円</option>
            <option>3001円~4001円</option>
            <option>4001円~5000円</option>
            <option>5001円~7000円</option>
            <option>7001円~10000円</option>
            <option>10001円~15000円</option>
            <option>15001円~20000円</option>
            <option>20001円~30000円</option>
            <option>30001円~</option>
          </NativeSelect>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default CustomAppBar;
