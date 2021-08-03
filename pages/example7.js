// React.useStateとtextField
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';
import { CustomButton } from '/components/uiParts/CustomButton';

const initUsername = 'jey3dayo';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: red[800],
    paddingBottom: 20,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const fetchApi = async username => {
  const uri = `https://api.github.com/users/${username}`;
  const res = await fetch(uri);
  const result = await res.json();

  if (!res.ok) {
    const message = result?.message ?? result;
    throw new Error(message);
  }

  return result;
};

const Example = ({ userInfo }) => {
  // state用意
  const [username, setUsername] = React.useState(initUsername);
  const [value, setValue] = React.useState(userInfo ?? '');
  const classes = useStyles();

  // ユーザ名の反映
  const handleChange = event => {
    setUsername(event.target.value);
  };

  // 更新ボタンを押すと実行
  const onClick = async () => {
    try {
      const res = await fetchApi(username);
      setValue(res);
    } catch (e) {
      setValue(e?.message ?? 'error');
    }
  };

  const avatarUrl = value?.avatar_url ?? null;

  return (
    <Container>
      <div className={classes.root}>
        <div className={classes.title}>Githubのプロフィールを取得するサンプル</div>
        <Box
          component="form"
          noValidate
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
        >
          <TextField id="outlined-basic" label="username" variant="outlined" value={username} onChange={handleChange} />

          <Box component="span" sx={{ padding: '10px' }}>
            <CustomButton onClick={onClick}>更新</CustomButton>
          </Box>

          {avatarUrl ? <Avatar alt="avatar" src={avatarUrl} className={classes.large} /> : null}

          <Box sx={{ padding: '10px' }}>value: {JSON.stringify(value)}</Box>
        </Box>

        <div>
          <a href="https://nextjs.org/docs/basic-features/data-fetching" target="_blank" rel="noreferrer">
            参考: Basic Features: Data Fetching | Next.js
          </a>
        </div>
      </div>
    </Container>
  );
};

// コンストラクタみたいなもの
export async function getStaticProps() {
  const res = await fetchApi(initUsername);
  return {
    props: {
      userInfo: res,
    },
  };
}
export default Example;
