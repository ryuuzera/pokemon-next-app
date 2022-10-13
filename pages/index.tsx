import type { NextPage } from 'next'
import { Home } from '../src/pages/Home'
import styles from './styles/Home.module.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage: NextPage = () => {
  return (
    <>
    <div className={styles.Body} >
      <div className={styles.Blur}></div>
    <Home />
    <ToastContainer />
    </div> 
    </>
  )
}

export default HomePage
