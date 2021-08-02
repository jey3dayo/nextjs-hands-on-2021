// レイアウト
import React from 'react';
import CustomAppBar from '/components/uiParts/CustomAppBar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { red, blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  title: {
    background: blueGrey[100],
    color: red[800],
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const users = [
  { id: 1, name: 'Aさん' },
  { id: 2, name: 'Bさん' },
  { id: 3, name: 'Cさん' },
];

const Example = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar />
      <Container>
        <Box sx={{ flexGrow: 1, background: blueGrey[200] }}>
          <Box className={classes.title} sx={{ p: 1 }}>
            Grid Layout
          </Box>
          <Box sx={{ m: 2 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>xs=12</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
            </Grid>
          </Box>

          <Box className={classes.title} sx={{ p: 1 }}>
            Users
          </Box>
          <Box sx={{ m: 2 }}>
            <Grid container spacing={3}>
              {users.map(user => {
                return (
                  <Grid key={user.id} item xs={4}>
                    <Paper className={classes.paper}>{user.name}</Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <div>
            <a href="https://material-ui.com/components/grid/" target="_blank" rel="noreferrer">
              参考: React Grid component - Material-UI
            </a>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Example;
