/* eslint-disable @next/next/no-img-element */
import { Stack, Typography } from '@mui/material';
import { Header } from '../../components/Header';
import { PokemonList } from '../../components/PokemonList';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <>
      <Header />
      <Stack className={styles.Container}>
        <Stack className={styles.Menu}>
          <Stack className={styles.MenuLeft}>
            <Stack className={styles.menuLeftCard}>
              <Stack className={styles.listTitle}>
                <Stack className={styles.backgroundTitle}>
                  <Stack className={styles.title}>
                    <Typography sx={{ fontSize: '1.5rem' }}>Select Pokemon</Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack className={styles.listPokemon}>
                <Stack className={styles.pokemons}>
                  <PokemonList />
                </Stack>
              </Stack>
              <Stack className={styles.listFooter}></Stack>
            </Stack>
          </Stack>
          <Stack className={styles.MenuRight}></Stack>
        </Stack>
      </Stack>
    </>
  );
};
