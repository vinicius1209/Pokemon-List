import { Box, Img, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon, toggleFavorite } from "../store/pokemonListSlice";

function List() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  const favorites =
    useSelector((state) => state.pokemon.data.filter((p) => p.isFavorite)) ||
    JSON.parse(localStorage.getItem("favorites")) ||
    [];

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  const handleFavoriteClick = (pokemon) => {
    dispatch(toggleFavorite(pokemon));
  };

  let content;

  if (pokemon.status === "loading") {
    content = <div>Loading...</div>;
  } else if (pokemon.status === "succeeded") {
    content = (
      <ul>
        {pokemon.data.map((p) => (
          <li key={p.name} style={{ marginBottom: "8px" }}>
            <button
              onClick={() => handleFavoriteClick(p)}
              style={{
                color: "yellow",
                marginRight: "10px",
              }}
            >
              {p.isFavorite ? <span style={{ color: "#EC0000" }}>X</span> : "★"}
            </button>
            {p.isFavorite ? (
              <span style={{ color: "#20a1d8" }}>{p.name}</span>
            ) : (
              <span>{p.name}</span>
            )}
          </li>
        ))}
      </ul>
    );
  } else if (pokemon.status === "failed") {
    content = <div>{pokemon.error}</div>;
  }
  return (
    <Box
      backgroundImage={
        "url(https://i.pinimg.com/736x/d6/7c/3c/d67c3cbce4d7e9355e8522e10434d76c.jpg)"
      }
      width={"100%"}
      backgroundRepeat={"no-repeat"}
      backgroundSize="cover"
      float="left"
    >
      <Box display={"flex"}>
        <Img
          src="https://www.pngmart.com/files/2/Pokemon-Ash-PNG-Clipart.png"
          height={"500px"}
          margin={"100px 0 50px 100px"}
        ></Img>
        <Box width="300px" height={"700px"} margin={"50px 0 0 100px"}>
          <Text
            border={"1px solid #fff"}
            borderRadius={"7px"}
            color="#fff"
            fontFamily={"Start"}
          >
            Aqui estão alguns de nossos pokémons:
          </Text>
          <Text
            backgroundColor={"#fff"}
            opacity="0.8"
            padding={"2px"}
            borderRadius={"10px"}
            fontFamily="PokemonFont"
            fontWeight={"bold"}
          >
            {content}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default List;
