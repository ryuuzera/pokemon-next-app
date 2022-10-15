/* eslint-disable  */
import { Stack, Typography } from '@mui/material';
import { useEffect, useState, memo } from 'react';
import Api from '../../api/axios';
import styles from './PokemonList.module.css';
import { toast } from 'react-toastify';

const PokemonList = (props: any) => {
  const [objA, setObjA]: any = useState([]);
  useEffect(() => {
    const fetchPokemon = async (index: number) => {
      await Api.get(`/pokemon/${index}`)
        .then((response) => {
          setObjA((objA: any) => [...objA, response.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    for (let i = 1; i < 152; i++) {
      fetchPokemon(i);
    }
  }, []);
  return (
    <>
      {
      objA.map((obj: any, id: any) => {
        return (
          <Stack
            id={id.toString()}
            className={styles.pokemonItem}
            sx={obj.name === 'mew' ? { display: props.mew ? 'normal' : 'none' } : { display: 'normal' }}
            onClick={() => alert(obj.name)}
          >
            <Stack className={styles.pokemonImgOuter}>
              <Stack className={styles.pokemonImg}>
                <img
                  alt=''
                  src={
                    obj.name != 'mr-mime'
                      ? `https://projectpokemon.org/images/normal-sprite/${obj.name.replace('-', '_')}.gif`
                      : `https://projectpokemon.org/images/normal-sprite/${obj.name.replace('-', '.')}.gif`
                  }
                />
              </Stack>
            </Stack>
            <Stack className={styles.pokemonName}>
              <Typography sx={{ fontSize: '1.2rem' }}>{`${obj.id}-${obj.name.at(0).toUpperCase()}${obj.name.slice(
                1
              )}`}</Typography>
            </Stack>
          </Stack>
        );
      })}
    </>
  );
};

export default memo(PokemonList);