// React.useStateとtextField
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import { CustomButton } from '/components/uiParts/CustomButton';

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
    paddingBottom: 20,
  },
}));

const Example = () => {
  // React.useStateを利用し、変数とセッターを用意
  // これをDOMに組み込むとリアルタイムに画面反映される
  const [value, setValue] = React.useState('テスト');
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const handleChange = event => {
    setValue(event.target.value);
  };

  const onClick = () => {
    setValue('');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Container>
      <div className={classes.root}>
        <div className={classes.title}>onClickとuseState</div>
        <Box
          component="form"
          noValidate
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
        >
          <TextField id="outlined-basic" label="テキスト" variant="outlined" value={value} onChange={handleChange} />

          <Box component="span" sx={{ padding: '10px' }}>
            <CustomButton onClick={onClick} variant="outlined">
              クリア
            </CustomButton>
          </Box>

          <Box
            component="form"
            noValidate
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch', marginTop: '3ch', marginBottom: '3ch' },
            }}
          >
            <TextField
              error={value === ''}
              id="standard-error-helper-text"
              variant="standard"
              label="テキスト"
              helperText={value === '' ? '未入力です' : ''}
              value={value}
              onChange={handleChange}
            />
          </Box>
        </Box>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            クリアしました
          </Alert>
        </Snackbar>

        <div>
          <a href="https://next.material-ui.com/components/text-fields/" target="_blank" rel="noreferrer">
            参考: Text Field React component - Material-UI
          </a>
        </div>
      </div>
    </Container>
  );
};

/*
 * ch は chracter unit で、0（ゼロ）の幅を単位とします。
 * 基本的には等幅フォントが対象で、要素にwidth: 40ch と指定すれば40文字入る幅が設定されます
 */

export default Example;
