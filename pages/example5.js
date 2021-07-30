// MUIの使い方, uiPartsへの配置
import Container from '@material-ui/core/container';
import { CustomButton, CustomButtonSecondary } from '/components/uiParts/CustomButton';
import CustomList from '/components/CustomList';

const items = [
  { id: 1, name: '春はあけぼの' },
  { id: 2, name: 'やうやう白く' },
  { id: 3, name: 'なりゆく山際' },
  { id: 4, name: '少し明かりて' },
  { id: 5, name: '紫だちたる雲の' },
  { id: 6, name: '細くたなびきたる' },
];

const Example = () => {
  return (
    <Container>
      <div style={{ color: 'red', fontSize: '1.2rem' }}>カスタムコンポーネント</div>
      <CustomList users={items} />
      <CustomButton>ボタンA</CustomButton>
      <CustomButtonSecondary>ボタンB</CustomButtonSecondary>
      <div><a href="https://material-ui.com/components/grid/" target="_blank" rel="noreferrer">参考: React Grid component - Material-UI</a></div>
    </Container>
  );
};

export default Example;
