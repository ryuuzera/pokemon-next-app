/* eslint-disable @next/next/no-img-element */
import { Stack, Typography } from '@mui/material';
import { Chart as ChartJS, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip } from 'chart.js';
import { useState } from 'react';
import RadarChart from 'react-svg-radar-chart';
// import 'react-svg-radar-chart/build/css/index.css';
import { Header } from '../../components/Header';
import PokemonList from '../../components/PokemonList';
import styles from './Home.module.css';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export const Home = () => {
  const data = [
    {
      data: {
        HP: 0.2,
        Attack: 0.4,
        Defense: 0.244,
        SpecialAttack: 0.67,
        SpecialDefense: 0.45,
        Speed: 1,
      },
      meta: { color: 'rgb(11, 95, 173)' },
    },
  ];
  const captions = {
    HP: 'HP',
    Attack: 'Attack',
    Defense: 'Defense',
    SpecialAttack: 'Special Attack',
    SpecialDefense: 'Special Defense',
    Speed: 'Speed',
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
                <RadarChart captions={captions} data={data} size={400} />
              </Stack>
              <style jsx global>
                {`
                  .shape {
                    fill-opacity: 0.5;
                    cursor: pointer;
                  }
                  .shape:hover {
                    fill-opacity: 0.65;
                  }
                  .scale {
                    fill: rgba(126, 119, 99, 0.4);
                    stroke: #25242499;
                    stroke-width: 2px;
                  }
                  .axis {
                    stroke: #25242499;
                    stroke-width: 2px;
                  }
                  .caption {
                    fill: rgba(226, 219, 199, 0.9);
                    font-size: 1.25rem;
                    font-weight: 300;
                  }
                  #infoOne {
                    transition: all 0.4s;
                    background: #ae5afc97;
                    height: 80%;
                    width: 45%;
                  }
                  #infoTwo {
                    background: #1a98a1;
                    transition: all 0.4s;
                    height: 80%;
                    width: 45%;
                  }
                `}
              </style>
              <Stack className={styles.pokemonInfoMisc}>
                <Stack className={styles.pokemonInfoDesc}>
                  <Typography sx={{ color: 'rgba(226, 219, 199,0.9)', fontSize: '0.8rem' }}>
                    Said to rest quietly in an undiscovered cave, this POKéMON was created solely for battling.
                  </Typography>
                </Stack>
                <Stack className={styles.pokemonInfoTypes}>
                  <Stack id='infoOne' className={styles.pokemonInfoTypeEach}>
                    <Typography sx={{ color: 'rgba(226, 219, 199,0.9)', fontSize: '1.5rem', display: 'normal'}}>
                      Psychic
                    </Typography>
                  </Stack>

                  <Stack id='infoTwo' className={styles.pokemonInfoTypeEach}>
                  <Typography sx={{ color: 'rgba(226, 219, 199,0.9)', fontSize: '1.5rem', display: 'normal'}}>
                      Flying
                    </Typography>
                  </Stack>
                </Stack>
                <Stack className={styles.pokemonInfoGap}></Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
