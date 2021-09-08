import React from 'react';
import getConfig from 'next/config';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';
import { CustomButton } from '/components/uiParts/CustomButton';

const { publicRuntimeConfig } = getConfig();
const { VERCEL_URL } = publicRuntimeConfig;

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

const fetchApi = async () => {
  const query = new URLSearchParams();
  query.set('po', 'X119');
  const res = await fetch(`http://localhost:3000/api/gourmet?${query.toString()}`);
  const result = await res.json();

  return result;
};

const Example = ({ userInfo }) => {
  // state用意
  const [value, setValue] = React.useState(userInfo ?? '');
  const classes = useStyles();

  // 更新ボタンを押すと実行
  const onClick = async () => {
    try {
      const res = await fetchApi();
      setValue(res);
    } catch (e) {
      setValue(e?.message ?? 'error');
    }
  };

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
          <Box component="span" sx={{ padding: '10px' }}>
            <CustomButton onClick={onClick}>更新</CustomButton>
          </Box>

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
export async function getServerSideProps() {
  const res = await fetchApi();
  return {
    props: {
      userInfo: res,
    },
  };
}
export default Example;
