// mapで操作
import { makeStyles } from '@material-ui/styles';
import { blueGrey } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    background: blueGrey[200],
  },
  title: {
    background: blueGrey[100],
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
    paddingTop: '12px',
    paddingBottom: '12px',
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
        <div className={classes.title}>ユーザーリスト</div>

        {users.map(user => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </Container>
  );
};

export default Example;
