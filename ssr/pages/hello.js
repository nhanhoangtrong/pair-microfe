import dynamic from 'next/dynamic';

const Header = dynamic({
  loader: () => import('header/Header'),
}, {
  ssr: true
});

const Hello = () => {

  return <div>
    <Header />
    <div>SSR</div>
  </div>;
};

export default Hello;
