import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import Banner from '@/components/banner';

export default function Home() {

  const handleOnBannerBtnClick = () => {
    console.log('hi banner button');
  };

  return (
    <>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner buttonText="View stores nearby" handleOnClick={handleOnBannerBtnClick} />
      </main>
    </>
  );
}
