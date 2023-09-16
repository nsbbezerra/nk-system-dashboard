import {
  ArrowRight,
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
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import EcommerceImage from "../assets/ecommerce.jpg";

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
              h="250px"
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
              <Button rightIcon={<ArrowRight />} size={"sm"}>
                Ver temas
              </Button>
            </Stack>
          </CardBody>
        </Card>

        <Card w="100%" shadow={"lg"} overflow={"hidden"}>
          <CardBody>
            <Stack
              spacing={4}
              align={"center"}
              textAlign={"center"}
              h="250px"
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
              <Button rightIcon={<ArrowRight />} size={"sm"}>
                Ver opções
              </Button>
            </Stack>
          </CardBody>
        </Card>

        <Card w="100%" shadow={"lg"} overflow={"hidden"}>
          <CardBody>
            <Stack
              spacing={4}
              align={"center"}
              textAlign={"center"}
              h="250px"
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
              <Button rightIcon={<ArrowRight />} size={"sm"}>
                Veja mais
              </Button>
            </Stack>
          </CardBody>
        </Card>

        <Card w="100%" shadow={"lg"} overflow={"hidden"}>
          <CardBody>
            <Stack
              spacing={4}
              align={"center"}
              textAlign={"center"}
              h="250px"
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
              <Button rightIcon={<ArrowRight />} size={"sm"}>
                Veja mais
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <Center mt={8}>
        <Button colorScheme="blue" size={"lg"}>
          Crie sua loja agora
        </Button>
      </Center>
    </Layout>
  );
}
