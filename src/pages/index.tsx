import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import type { NextPage } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';
import styles from './styles/Homepage.module.css';

const cache = createCache({
  key: 'css',
  prepend: true,
});

const HomePage: NextPage = () => {
  return (
    <>
      <CacheProvider value={cache}>
        <div className={styles.Body}>
          <div className={styles.Blur}></div>
          <Home />
          <ToastContainer />
        </div>
      </CacheProvider>
    </>
  );
};

export default HomePage;
