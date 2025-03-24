import React, { useEffect } from "react";
import { Text, Container, VStack, HStack } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
function HomePage() {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log(products);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products <span>🚀</span>
        </Text>

        {products.length === 0 && (
          <Text
            fontSize="x1"
            textAlign={"center"}
            color="gray.500"
            fontWeight={"bold"}
          >
            No products found 😢{" "}
            <Link to="/create">
              <Text
                as={"span"}
                color={"blue.500"}
                _hover={{ textDecoration: "underline" }}
              >
                Create one
              </Text>
            </Link>
          </Text>
        )}

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"100%"}
          padding={4}
        >
          {products.map((product) => {
            return (
              <ProductCard key={product._id} product={product} w={"40%"} />
            );
          })}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}

export default HomePage;
