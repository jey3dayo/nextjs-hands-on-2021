// mapで操作
import { makeStyles } from '@material-ui/styles';
import { red, blueGrey } from '@material-ui/core/colors';
import Container from '@material-ui/core/container';

const useStyles = makeStyles({
  root: {
    background: blueGrey[200],
  },
  title: {
    background: blueGrey[100],
    color: red[800],
    paddingTop: '12px',
    paddingBottom: '12px',
  },
});

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
