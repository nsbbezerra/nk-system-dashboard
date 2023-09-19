import {
  Desktop,
  Money,
  PaintBrushBroad,
  ShoppingBagOpen,
  Truck,
} from "@phosphor-icons/react";
import { Layout } from "../components";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import templates from "../data/site-layouts.json";

import EcommerceImage from "../assets/ecommerce.jpg";
import { Link } from "react-router-dom";

export default function Ecommerce() {
  return (
    <Layout pageIcon={ShoppingBagOpen} pageTitle="Ecommerce">
      <Center>
        <Stack align={"center"} spacing={4}>
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src={EcommerceImage}
            shadow={"lg"}
            borderWidth={"3px"}
            borderColor={"blue.900"}
          />

          <Heading fontFamily={"body"} color={"blue.900"}>
            Ecommerce
          </Heading>

          <Box
            w={"150px"}
            borderBottom={"2px"}
            borderBottomColor={"blue.900"}
          />

          <Text fontSize={"xl"} maxW={"2xl"} textAlign={"center"}>
            Tenha seu negócio disponível a seus clientes 24 horas por dia, venda
            sem limitações e lucre com nossa ferramentas automatizadas.
          </Text>
        </Stack>
      </Center>

      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={8}
        p={4}
        mt={8}
      >
        <Card w="100%" shadow={"lg"} overflow={"hidden"}>
          <CardBody>
            <Stack
              spacing={4}
              align={"center"}
              textAlign={"center"}
              h="200px"
              justify={"center"}
            >
              <Box color={"blue.600"}>
                <PaintBrushBroad fontSize={"40px"} />
              </Box>
              <Heading fontFamily={"body"} fontSize={"lg"} color={"blue.900"}>
                Temas gratuitos
              </Heading>
              <Text fontSize={"sm"}>
                Escolha um tema de sua preferência e deixe a sua loja com a
                melhor experiência de compra.
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card w="100%" shadow={"lg"} overflow={"hidden"}>
          <CardBody>
            <Stack
              spacing={4}
              align={"center"}
              textAlign={"center"}
              h="200px"
              justify={"center"}
            >
              <Box color={"blue.600"}>
                <Money fontSize={"40px"} />
              </Box>
              <Heading fontFamily={"body"} fontSize={"lg"} color={"blue.900"}>
                Pagamentos Automatizados
              </Heading>
              <Text fontSize={"sm"}>
                Diversos gateways de pagamentos disponíveis, escolha o da sua
                preferência.
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card w="100%" shadow={"lg"} overflow={"hidden"}>
          <CardBody>
            <Stack
              spacing={4}
              align={"center"}
              textAlign={"center"}
              h="200px"
              justify={"center"}
            >
              <Box color={"blue.600"}>
                <Truck fontSize={"40px"} />
              </Box>
              <Heading fontFamily={"body"} fontSize={"lg"} color={"blue.900"}>
                Gestão de Frete
              </Heading>
              <Text fontSize={"sm"}>
                Temos uma plataforma integrada de gestão e gerenciamento de
                frete, cálculo, estimativa e rastreio.
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card w="100%" shadow={"lg"} overflow={"hidden"}>
          <CardBody>
            <Stack
              spacing={4}
              align={"center"}
              textAlign={"center"}
              h="200px"
              justify={"center"}
            >
              <Box color={"blue.600"}>
                <Desktop fontSize={"40px"} />
              </Box>
              <Heading fontFamily={"body"} fontSize={"lg"} color={"blue.900"}>
                Dashboard
              </Heading>
              <Text fontSize={"sm"}>
                Dashboard de controle e gestão da sua loja virtual, estoque,
                vendas, pagamentos, gestão financeira e fiscal.
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <HStack fontSize={"3xl"} color={"blue.900"} mt={8}>
        <PaintBrushBroad />
        <Heading fontFamily={"body"}>Temas</Heading>
      </HStack>
      <Box
        w={"200px"}
        borderBottom={"2px"}
        borderBottomColor={"blue.900"}
        my={2}
      />
      <Text fontSize={"xl"}>
        Personalize a sua loja, deixe ela com a sua cara, temos diversas opções
        de temas escolha uma do seu gosto, personalize com suas cores e sua
        logo.
      </Text>

      <Stack spacing={3} mt={5}>
        {templates.map((template) => (
          <Box key={template.category}>
            <Text fontWeight={300} fontSize={"2xl"}>
              {template.category}
            </Text>
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={[4, 8, 4, 8, 8]}
              mt={3}
            >
              {template.templates.map((temp) => (
                <GridItem key={temp.id}>
                  <Card
                    w="100%"
                    shadow={"lg"}
                    overflow={"hidden"}
                    borderWidth={"1px"}
                    borderColor={"gray.200"}
                    h={"fit-content"}
                  >
                    <CardBody p={0}>
                      <Image
                        src={temp.thumbnail}
                        w="100%"
                        h={"220px"}
                        objectFit={"cover"}
                      />
                      <Divider />
                      <Stack p={3}>
                        <Text>{temp.name}</Text>
                      </Stack>
                      <Divider />
                      <Box p={2}>
                        <Link to={temp.demo} target="_blank">
                          <Button size={"sm"} w="100%" colorScheme="blue">
                            Demonstração
                          </Button>
                        </Link>
                      </Box>
                    </CardBody>
                  </Card>
                </GridItem>
              ))}
            </Grid>
          </Box>
        ))}
      </Stack>
    </Layout>
  );
}
