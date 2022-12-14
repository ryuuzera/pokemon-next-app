/* eslint-disable @next/next/no-img-element */
import { CircularProgress, Stack, Typography } from '@mui/material';
import { Chart as ChartJS, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip } from 'chart.js';
import { useEffect, useState } from 'react';
import RadarChart from 'react-svg-radar-chart';
import Api from '../../api/axios';
import { Header } from '../../components/Header';
import PokemonList from '../../components/PokemonList';
import { getTypeColor } from '../../utils/getTypeColor';
import styles from './Home.module.css';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Home = () => {
  const AsyncImage = (props: any) => {
    const [loadedSrc, setLoadedSrc] = useState(null);
    useEffect(() => {
      setLoadedSrc(null);
      if (props.src) {
        const handleLoad = () => {
          setLoadedSrc(props.src);
        };
        const image = new Image();
        image.addEventListener('load', handleLoad);
        image.src = props.src;
        return () => {
          image.removeEventListener('load', handleLoad);
        };
      }
    }, [props.src]);
    if (loadedSrc === props.src) {
      return <img {...props} />;
    } else {
      return (
        <>
          <Stack className={styles.ProgressImg}>
            <CircularProgress size={'10rem'} sx={{ color: 'rgb(122, 122, 193)' }} />
          </Stack>
        </>
      );
    }
  };

  const [fullLoaded, setFullLoaded] = useState(false);
  const [pokemon, setPokemon]: any = useState([]);
  const [hp, setHP]: any = useState(45 / 200);
  const [attack, setAttack]: any = useState(49 / 200);
  const [defense, setDefense]: any = useState(49 / 200);
  const [specialAttack, setSpecialAttack]: any = useState(65 / 200);
  const [specialDefense, setSpecialDefense]: any = useState(65 / 200);
  const [speed, setSpeed]: any = useState(45 / 200);
  const [pokemonDesc, setPokemonDesc] = useState('');

  const [pokemonIndex, setPokemonIndex]: any = useState(1);
  useEffect(() => {
    const getPokemonDesc = async (id: any) => {
      await Api.get(`/pokemon-species/${id}`)
        .then((response) => {
          const fileterdTextEntries = response.data.flavor_text_entries.filter(
            (element: any) => element.language.name === 'en'
          );
          fileterdTextEntries.length > 0
            ? setPokemonDesc(
                JSON.stringify(fileterdTextEntries[0].flavor_text).replace(/\\n/g, '\x0a').replace(/\\f/g, '\x0a')
              )
            : null;
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (pokemon.length > 0) {
      getPokemonDesc(pokemon[pokemonIndex - 1].id);
      if (pokemon[pokemonIndex - 1].id === 113) {
        setHP(1);
      } else {
        setHP(pokemon[pokemonIndex - 1].stats[0].base_stat / 200);
      }
      setAttack(pokemon[pokemonIndex - 1].stats[1].base_stat / 200);
      setDefense(pokemon[pokemonIndex - 1].stats[2].base_stat / 200);
      setSpecialAttack(pokemon[pokemonIndex - 1].stats[3].base_stat / 200);
      setSpecialDefense(pokemon[pokemonIndex - 1].stats[4].base_stat / 200);
      setSpeed(pokemon[pokemonIndex - 1].stats[5].base_stat / 200);
    }
  }, [pokemon, pokemonIndex]);
  useEffect(() => {
    const fetchPokemon = async (index: number) => {
      await Api.get(`/pokemon/${index}`)
        .then((response) => {
          setPokemon((pokemon: any) => [...pokemon, response.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const asyncLoop = async () => {
      for (let i = 1; i < 152; i++) {
        await fetchPokemon(i);
      }
      setFullLoaded(true);
    };
    asyncLoop();
  }, []);

  const data = [
    {
      data: {
        HP: hp,
        Attack: attack,
        Defense: defense,
        SpecialAttack: specialAttack,
        SpecialDefense: specialDefense,
        Speed: speed,
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
      <Header setMew={setMew} setPokemonIndex={setPokemonIndex} />
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
                  <PokemonList
                    pokemon={pokemon}
                    setPokemon={setPokemon}
                    pokemonIndex={pokemonIndex}
                    setPokemonIndex={setPokemonIndex}
                    mew={mew}
                    setMew={setMew}
                  />
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
                    {pokemon.length > 0
                      ? `${pokemon[pokemonIndex - 1].name.at(0).toUpperCase()}${pokemon[pokemonIndex - 1].name.slice(
                          1
                        )}`
                      : ''}
                  </Typography>
                </Stack>
                <img
                  src={
                    (pokemon.length > 150)
                      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png`
                      : ''
                  }
                  alt=''
                />
              </Stack>
            </Stack>
            <Stack className={styles.pokemonInfoDiv}>
              <Stack className={styles.pokemonInfoChart}>
                <RadarChart captions={captions} data={data} size={400} />
              </Stack>
              <Stack className={styles.pokemonInfoMisc}>
                <Stack className={styles.pokemonInfoDesc}>
                  <Typography sx={{ color: 'rgba(226, 219, 199,0.9)', fontSize: '1rem', margin: '4px' }}>
                    {`${pokemonDesc}`}
                  </Typography>
                </Stack>
                <Stack className={styles.pokemonInfoTypes}>
                  <Stack id='infoOne' className={styles.pokemonInfoTypeEach}>
                    <Typography
                      sx={{
                        textShadow: '1px 1px 2px black',
                        color: 'rgba(226, 219, 199,0.9)',
                        fontSize: '1.5rem',
                        display: 'normal',
                      }}
                    >
                      {pokemon.length > 0 ? `${pokemon[pokemonIndex - 1].types[0].type.name}` : ''}
                    </Typography>
                  </Stack>

                  <Stack id='infoTwo' className={styles.pokemonInfoTypeEach}>
                    <Typography
                      sx={{
                        textShadow: '1px 1px 2px black',
                        color: 'rgba(226, 219, 199,0.9)',
                        fontSize: '1.5rem',
                        display: 'normal',
                      }}
                    >
                      {pokemon.length > 0 && pokemon[pokemonIndex - 1].types[1]
                        ? `${pokemon[pokemonIndex - 1].types[1].type.name}`
                        : ''}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack className={styles.pokemonInfoGap}></Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {!fullLoaded ? (
        <Stack className={styles.Progress}>
          <CircularProgress size={'10rem'} sx={{ color: 'rgb(219, 75, 106)' }} />
        </Stack>
      ) : null}
      <style jsx global>
        {`
          .shape {
            transition: all 0.5s;
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
            font-size: 1rem;
            font-weight: 300;
          }
          #infoOne {
            transition: all 0.2s;
            background: ${pokemon.length > 0 && pokemon[pokemonIndex - 1].types
              ? getTypeColor(pokemon[pokemonIndex - 1].types[0].type.name)
              : ''};
            height: 80%;
            width: 45%;
          }
          #infoTwo {
            background: ${pokemon.length > 0 && pokemon[pokemonIndex - 1].types[1]
              ? getTypeColor(pokemon[pokemonIndex - 1].types[1].type.name)
              : ''};
            transition: all 0.2s;
            height: ${pokemon.length > 0 && pokemon[pokemonIndex - 1].types[1] ? '80%' : '0%'};
            width: ${pokemon.length > 0 && pokemon[pokemonIndex - 1].types[1] ? '45%' : '0%'};
          }
        `}
      </style>
    </>
  );
};

export default Home;
