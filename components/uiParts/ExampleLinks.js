import Link from 'next/link';

const links = [
  { href: '/example1', title: 'example1: Hello World' },
  { href: '/example2', title: 'example2: スタイル適用' },
  { href: '/example3', title: 'example3: 配列操作' },
  { href: '/example4', title: 'example4: レイアウト' },
  { href: '/example5', title: 'example5: カスタムコンポーネント' },
  { href: '/example6', title: 'example6: onClickとuseState' },
  { href: '/example7', title: 'example7: fetch' },
];

const ExampleLinks = () =>
  links.map(link => (
    <div key={link.href}>
      <Link href={link.href}>{link.title}</Link>
    </div>
  ));

export default ExampleLinks;
