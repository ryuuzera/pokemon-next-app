/* eslint-disable @next/next/no-img-element */
import { Stack, Typography } from '@mui/material';
import { Header } from '../../components/Header';
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
                  <Stack className={styles.pokemonItem}>
                    <Stack className={styles.pokemonImg}>
                      <img src='http://play.pokemonshowdown.com/sprites/xyani/charizard.gif' />
                    </Stack>
                    <Stack className={styles.pokemonName}>
                      <Typography sx={{ fontSize: '1.2rem' }}>Charizard</Typography>
                    </Stack>
                  </Stack>

                  <Stack className={styles.pokemonItem}>
                    <Stack className={styles.pokemonImg}>
                      <img src='http://play.pokemonshowdown.com/sprites/xyani/charizard.gif' />
                    </Stack>
                    <Stack className={styles.pokemonName}>
                      <Typography sx={{ fontSize: '1.2rem' }}>Charizard</Typography>
                    </Stack>
                  </Stack>

                  
                  <Stack className={styles.pokemonItem}>
                    <Stack className={styles.pokemonImg}>
                      <img src='http://www.pkparaiso.com/imagenes/xy/sprites/animados/charmander.gif' />
                    </Stack>
                    <Stack className={styles.pokemonName}>
                      <Typography sx={{ fontSize: '1.2rem' }}>Charizard</Typography>
                    </Stack>
                  </Stack>

                  <Stack className={styles.pokemonItem}>
                    <Stack className={styles.pokemonImg}>
                      <img src='http://play.pokemonshowdown.com/sprites/xyani/pikachu.gif' />
                    </Stack>
                    <Stack className={styles.pokemonName}>
                      <Typography sx={{ fontSize: '1.2rem' }}>Charizard</Typography>
                    </Stack>
                  </Stack>

                  <Stack className={styles.pokemonItem}>
                    <Stack className={styles.pokemonImg}>
                      <img src='http://play.pokemonshowdown.com/sprites/xyani/bulbasaur.gif' />
                    </Stack>
                    <Stack className={styles.pokemonName}>
                      <Typography sx={{ fontSize: '1.2rem' }}>Charizard</Typography>
                    </Stack>
                  </Stack>

                  <Stack className={styles.pokemonItem}>
                    <Stack className={styles.pokemonImg}>
                      <img src='http://play.pokemonshowdown.com/sprites/xyani/charmander.gif' />
                    </Stack>
                    <Stack className={styles.pokemonName}>
                      <Typography sx={{ fontSize: '1.2rem' }}>Charizard</Typography>
                    </Stack>
                  </Stack>
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
