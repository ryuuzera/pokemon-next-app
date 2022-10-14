/* eslint-disable @next/next/no-img-element */
import { Stack, Typography } from '@mui/material';
import { Chart as ChartJS, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip } from 'chart.js';
import { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import { Header } from '../../components/Header';
import PokemonList from '../../components/PokemonList';
import styles from './Home.module.css';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export const Home = () => {
  const data = {
    labels: ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'],
    datasets: [
      {
        label: 'Base Stats',
        data: [75, 100, 95, 40, 70, 110],
        fill: true,
        backgroundColor: 'rgba(212, 17, 17, 0.2)',
        borderWidth: 2,
        borderColor: 'rgb(204, 39, 39)',
        pointBackgroundColor: 'rgb(209, 28, 28)',
        pointBorderColor: '#8d3c3c',
        pointHoverBackgroundColor: '#d32727',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
        showLabelBackdrop: false,
      },
    ],
  };
  const options = {
    scale: {
      major: {
        enabled: true,
      },
      backdropColor: 'rgba(0, 0, 0, 0)',
      showLabelBackdrop: false,
      max: 255,
      min: 0,
    },
  };

  const [mew, setMew] = useState(false);
  return (
    <>
      <Header setMew={setMew} />
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
                  <PokemonList mew={mew} setMew={setMew} />
                </Stack>
              </Stack>
              <Stack className={styles.listFooter}></Stack>
            </Stack>
          </Stack>
          <Stack className={styles.MenuRight}>
            <Stack className={styles.pokemonAvatarDiv}>
              <Stack className={styles.pokemonAvatarImg}>
                <Stack className={styles.textDiv}>
                  <Typography
                    sx={{ fontSize: '1.6rem', fontWeight: '500' }}
                    variant='h4'
                    className={styles.pokemonName}
                  >
                    Mewtwo
                  </Typography>
                </Stack>
                <img
                  src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png'
                  alt=''
                />
              </Stack>
            </Stack>
            <Stack className={styles.pokemonInfoDiv}>
              <Stack className={styles.pokemonInfoChart}>
                {
                  //tsignore
                  <Radar datasetIdKey='1' data={data} options={options} />
                }
              </Stack>
              <Stack className={styles.pokemonInfoMisc}></Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
