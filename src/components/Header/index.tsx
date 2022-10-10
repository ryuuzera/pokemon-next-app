import { Grid, Stack, Typography } from '@mui/material';
import styles from './Header.module.css';
import { CgPokemon } from 'react-icons/cg';
import { GiHandBag } from 'react-icons/gi';
import { AiOutlineIdcard } from 'react-icons/ai'
import { FaWifi, FaShoppingBag } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io';

export const Header = () => {
  return (
    <>
      <Stack className={styles.Container}>
        <Stack className={styles.HeaderLeft}>
        <CgPokemon className={styles.icon}/>
        <Typography 
        className={styles.nickName}>
          Ryuu</Typography>
        </Stack>
        <Stack className={styles.HeaderCenter}>
          <Stack className={styles.HeaderItem}>
          <FaShoppingBag className={styles.icon} />
          </Stack>
          <Stack className={styles.HeaderItem}>
          <AiOutlineIdcard className={styles.icon}/>
          </Stack>
          <Stack className={styles.HeaderItem}>
          <FaWifi className={styles.icon}/>
          </Stack>
          <Stack className={styles.HeaderItem}>
          <IoMdSettings className={styles.icon}/>
          </Stack>
        </Stack>
        <Stack className={styles.HeaderRight}>
        <Typography 
        className={styles.buyCoffe}>
          Buy me a Coffe</Typography>
        </Stack>
      </Stack>
    </>
  );
};
