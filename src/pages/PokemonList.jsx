import {
  Grid,
  GridItem,
  CircularProgress,
  Img,
  Box,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../store/redux/pokemonRedux";
import PokemonItem from "@components/PokemonItem";

function PokemonList() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);

  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  useEffect(() => {
    if (pokemon && pokemon.status === "succeeded") {
      setIsLoading(false);
      setPokemons(pokemon.data.map((poke) => poke));
      return;
    }
    if (pokemon && pokemon.status === "loading") {
      setIsLoading(true);
      setPokemons([]);
    } else {
      setIsLoading(false);
    }
  }, [pokemon]);

  return (
    <Box
      w="100%"
      h="100%"
      backgroundImage={
        "url(https://i.pinimg.com/736x/d6/7c/3c/d67c3cbce4d7e9355e8522e10434d76c.jpg)"
      }
      width={"100%"}
      backgroundRepeat={"no-repeat"}
      backgroundSize="cover"
    >
      <Grid templateColumns="40% 60%" gap={4}>
        {isLoading ? (
          <CircularProgress isIndeterminate color="green.300" />
        ) : (
          <>
            <GridItem
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Img
                src="https://www.pngmart.com/files/2/Pokemon-Ash-PNG-Clipart.png"
                height={"500px"}
                m={10}
              />
            </GridItem>
            <GridItem display={"flex"} alignItems={"center"}>
              <Box
                float={"left"}
                maxH={"480px"}
                overflowY={"scroll"}
                overflowX={"hidden"}
                m={10}
              >
                <List
                  spacing={3}
                  textAlign={"left"}
                  backgroundColor={"#fff"}
                  opacity="0.8"
                  paddingTop={4}
                  paddingBottom={4}
                  paddingLeft={4}
                  paddingRight={10}
                >
                  {pokemons &&
                    pokemons.map((item, idx) => {
                      return (
                        <ListItem key={idx}>
                          <PokemonItem {...item} />
                        </ListItem>
                      );
                    })}
                </List>
              </Box>
            </GridItem>
          </>
        )}
      </Grid>
    </Box>
  );
}

export default PokemonList;
