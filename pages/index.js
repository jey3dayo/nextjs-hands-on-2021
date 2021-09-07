import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CustomAppBar from '/components/uiParts/CustomAppBar';
import ExampleLinks from '/components/uiParts/ExampleLinks';

const Index = () => (
  <Box sx={{ flexGrow: 1 }}>
    <CustomAppBar />
    <Container style={{ marginTop: '10px' }}>
      <Typography variant="h3">
        ジャンル
      </Typography>

      <ExampleLinks />
    </Container>
  </Box>
);

export default Index;
