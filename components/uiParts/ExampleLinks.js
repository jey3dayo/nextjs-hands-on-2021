import Link from 'next/link';

const links = [
  { href: '/example1', title: 'Hello World' },
  { href: '/example2', title: 'スタイル適用' },
  { href: '/example3', title: '配列操作' },
  { href: '/example4', title: 'レイアウト' },
  { href: '/example5', title: 'カスタムコンポーネント' },
  { href: '/example6', title: 'onClickとuseState' },
  { href: '/example7', title: 'fetch' },
];

const ExampleLinks = () =>
  links.map(link => (
    <div key={link.href}>
      <Link href={link.href}>{link.title}</Link>
    </div>
  ));

export default ExampleLinks;
