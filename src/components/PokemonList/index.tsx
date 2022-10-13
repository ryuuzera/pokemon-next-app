import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Api from '../../api/axios';
import styles from './PokemonList.module.css';

export const PokemonList = () => {
  const [objA, setObjA] = useState([]);
  useEffect(() => {
    setObjA([]);
    for (let i = 1; i < 152; i++) {
      Api.get(`/pokemon/${i}`)
        .then((response) => {
          setObjA((objA) => [...objA, response.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <>
      {objA.map((obj, id) => {
        return (
          <Stack key={id} className={styles.pokemonItem} onClick={() => (alert(obj.name))}>
            <Stack className={styles.pokemonImgOuter}>
              <Stack className={styles.pokemonImg}>
                <img src={(obj.name !='mr-mime') ? `https://projectpokemon.org/images/normal-sprite/${obj.name.replace('-', '_')}.gif` : `https://projectpokemon.org/images/normal-sprite/${obj.name.replace('-', '.')}.gif`} />
              </Stack>
            </Stack>
            <Stack className={styles.pokemonName}>
              <Typography sx={{ fontSize: '1.2rem' }}>{`${obj.name.at(0).toUpperCase()}${obj.name.slice(1)}`}</Typography>
            </Stack>
          </Stack>
        );
      })}
    </>
  );
};
