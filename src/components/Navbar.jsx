import { Box, Flex, Button, Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      wrap="wrap"
      padding="1.5rem"
      bg="#dc0a2d"
      border={" 1px solid #000"}
    >
      <Box display="flex" alignItems="center">
        <Link to={"/"}>
          <Button
            backgroundColor={"#00c7ff"}
            border={"4px solid white"}
            box-shadow="10px 5px 5px black"
            borderRadius={"40px"}
            width={"70px"}
            height={"70px"}
          >
            <Img src="https://cdn-icons-png.flaticon.com/512/4539/4539212.png" />
          </Button>
        </Link>
      </Box>
      <Box display="flex" alignItems="center" marginBottom={"40px"}>
        <span
          style={{
            backgroundColor: "#de092b",
            borderRadius: "30px",
            border: "2px solid #000",
            marginLeft: "15px",
            width: "20px",
            height: "20px",
          }}
        ></span>
        <span
          style={{
            backgroundColor: "#fffa38",
            border: "2px solid #000",
            borderRadius: "30px",
            marginLeft: "15px",
            width: "20px",
            height: "20px",
          }}
        ></span>
        <span
          style={{
            backgroundColor: "#62b56d",
            border: "2px solid #000",
            borderRadius: "30px",
            marginLeft: "15px",
            width: "20px",
            height: "20px",
          }}
        ></span>
      </Box>
    </Flex>
  );
}

export default Navbar;
