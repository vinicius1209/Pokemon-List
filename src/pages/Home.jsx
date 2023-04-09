import { Box, Container, Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box
      style={{
        backgroundColor: "red",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignContent: "center",
        float: "left",
      }}
    >
      <Container maxW="1000px">
        <span
          style={{
            backgroundColor: "#de092b",
            borderRadius: "30px",
            border: "2px solid #000",
            marginLeft: "15px",
            width: "20px",
            height: "20px",
            position: "absolute",
            left: "580px",
            top: "200px",
          }}
        ></span>
        <span
          style={{
            backgroundColor: "#de092b",
            borderRadius: "30px",
            border: "2px solid #000",
            marginLeft: "15px",
            width: "20px",
            height: "20px",
            position: "absolute",
            left: "650px",
            top: "200px",
          }}
        ></span>

        <Box
          style={{
            backgroundColor: "#dedede",
            padding: "80px",
            marginTop: "50px",
            maxWidth: "1500px",
            display: "flex",
            borderBottomLeftRadius: "100px",
            border: "2px solid #000",
            marginBottom: "100px",
          }}
        >
          <span
            style={{
              backgroundColor: "#de092b",
              borderRadius: "30px",
              border: "2px solid #000",
              marginLeft: "15px",
              width: "20px",
              height: "20px",
              position: "absolute",
              marginTop: "580px",
              marginRight: "100px",
            }}
          ></span>
          <Box
            backgroundColor={"#232323"}
            height={"550px"}
            width={"900px"}
            borderRadius={"20px"}
            color={"#FFF"}
            border={"2px solid #000"}
          >
            <Text fontSize="4xl" as={"i"} fontFamily="PokemonFont">
              Pokémon World
            </Text>
            <Text fontFamily="PokemonFont" fontSize="2xl" marginTop={"20px"}>
              Bem vindos ao projeto Pokémon List, aqui você pode ver sobre
              alguns de nossos pokémons, aprender mais sobre eles, ver detalhes
              e escolher seus favoritos
            </Text>
            <Img
              src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pokebola-Pok%C3%A9mon-PNG.png"
              height={"100px"}
              margin={"100px 0 50px 350px"}
            ></Img>
            <Link to={"/pokemon-list"}>
              <Text fontSize="3xl" fontFamily="PokemonFont">
                Iniciar aventura!
              </Text>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
