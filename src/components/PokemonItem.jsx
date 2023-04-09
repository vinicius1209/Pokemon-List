import { useDispatch } from "react-redux";
import { toggleFavorite } from "../store/redux/pokemonRedux";
import { ListIcon, Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function PokemonItem({ isFavorite, name, ...props }) {
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite({ name }));
  };

  return (
    <Box onClick={handleFavoriteClick} cursor={"pointer"}>
      <ListIcon as={StarIcon} color={isFavorite ? "yellow.300" : "gray.300"} />
      {name}
    </Box>
  );
}

export default PokemonItem;
