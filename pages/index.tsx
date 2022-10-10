import type { NextPage } from 'next'
import { Home } from '../src/pages/Home'
import styles from './styles/Home.module.css'

const HomePage: NextPage = () => {
  return (
    <>
    <div className={styles.Body} >
      <div className={styles.Blur}></div>
    <Home />
    </div> 
    </>
  )
}

export default HomePage
