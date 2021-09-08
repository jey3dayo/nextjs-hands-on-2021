import getConfig from 'next/config';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { MenuItem } from '@material-ui/core';

const { publicRuntimeConfig } = getConfig();
const { APP_NAME } = publicRuntimeConfig;

const CustomAppBar = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton size="medium" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Box>グルメンド</Box>

      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {APP_NAME}
      </Typography>
      <Grid container spacing={2} justifyContent="flex-end" alignItems="flex-end">
        <Grid>
          <Box fontSize={18}>ジャンル</Box>
        </Grid>
        <Grid xs={3}>
          <NativeSelect>
            <option>すべて</option>
            <option>レストラン</option>
            <option>カフェ</option>
            <option>寿司屋</option>
          </NativeSelect>
        </Grid>
        <Grid>
          <Box fontSize={18}>価格帯</Box>
        </Grid>
        <Grid xs={3}>
          <NativeSelect>
            <option>すべて</option>
            <option>~1500円</option>
            <option>~3000円</option>
            <option>~5000円</option>
          </NativeSelect>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default CustomAppBar;
