// レイアウト
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { red, blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: blueGrey[200],
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    background: blueGrey[100],
    color: red[800],
    paddingTop: '12px',
    paddingBottom: '12px',
  },
  contents: {
    padding: 10,
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
    <Container>
      <div className={classes.root}>
        <div className={classes.title}>Grid Layout</div>
        <div className={classes.contents}>
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
        </div>

        <div className={classes.title}>Users</div>
        <div className={classes.contents}>
          <Grid container spacing={3}>
            {users.map(user => {
              return (
                <Grid key={user.id} item xs={4}>
                  <Paper className={classes.paper}>{user.name}</Paper>
                </Grid>
              );
            })}
          </Grid>
        </div>
        <div>
          <a href="https://material-ui.com/components/grid/" target="_blank" rel="noreferrer">
            参考: React Grid component - Material-UI
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Example;
