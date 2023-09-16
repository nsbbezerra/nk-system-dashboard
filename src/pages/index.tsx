import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Layout } from "../components";
import { House, WhatsappLogo } from "@phosphor-icons/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Ecommerce from "../assets/ecommerce.jpg";
import Gestao from "../assets/gestao.png";
import Igreja from "../assets/igreja.webp";
import { useNavigate } from "react-router-dom";

export default function IndexPage() {
  function handldeWelcome(hour: number): string {
    if (hour >= 0 && hour <= 12) return "Bom dia!";
    if (hour >= 12 && hour <= 18) return "Boa tarde!";
    if (hour >= 18 && hour <= 23) return "Boa noite!";
    return "Bom dia!";
  }

  const navigate = useNavigate();

  return (
    <Layout pageTitle="Início" pageIcon={House}>
      <Stack textAlign={"center"}>
        <Heading fontFamily={"body"} color={"blue.900"} fontWeight={800}>
          {handldeWelcome(new Date().getHours())}
        </Heading>
        <Text mt={4}>
          A NK Systems é uma empresa que oferece soluções de software para
          gestão empresarial e e-commerce. Além disso, a empresa também trabalha
          com sistemas de gerenciamento de igrejas. Através de seus softwares, a
          NK Systems ajuda empresas a gerenciar suas operações de negócios,
          incluindo vendas, estoque, finanças e muito mais. A empresa também
          oferece soluções de e-commerce para ajudar as empresas a vender seus
          produtos online. Seus sistemas de gerenciamento de igrejas ajudam as
          igrejas a gerenciar suas operações diárias, incluindo membros,
          finanças e eventos.{" "}
        </Text>
      </Stack>

      <Center mt={8}>
        <Flex
          gap={[2, 2, 4, 4, 4]}
          direction={["column", "column", "row", "row", "row"]}
          align={"center"}
        >
          <Button
            colorScheme="whatsapp"
            size={["md", "md", "lg", "lg", "lg"]}
            leftIcon={<WhatsappLogo />}
          >
            Entre em contato
          </Button>
        </Flex>
      </Center>

      <Box mt={8} pb={4}>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            690: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            980: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            2080: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          style={{ paddingBottom: "20px" }}
        >
          <SwiperSlide>
            <Flex justify={"center"} align={"center"} p={4} w="full">
              <Card
                maxW="270px"
                w={"270px"}
                minW={"270px"}
                shadow={"lg"}
                overflow={"hidden"}
              >
                <CardBody p={0}>
                  <Image
                    src={Ecommerce}
                    h={"200px"}
                    objectFit={"cover"}
                    w="100%"
                  />
                  <Stack spacing="3" h={"225px"} p={3}>
                    <Heading size="md" color={"blue.900"}>
                      ECOMMERCE
                    </Heading>
                    <Text flex={1} fontSize={"sm"}>
                      A solução de e-commerce da NK Systems é uma plataforma que
                      ajuda as empresas a vender seus produtos online. A
                      plataforma oferece recursos para gerenciar produtos,
                      estoque, pedidos, pagamentos e muito mais.
                    </Text>
                  </Stack>
                </CardBody>
                <Divider borderColor={"gray.300"} />
                <CardFooter p={3}>
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    w={"100%"}
                    onClick={() => navigate("/ecommerce")}
                  >
                    Ver Planos
                  </Button>
                </CardFooter>
              </Card>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex justify={"center"} align={"center"} p={4} w="full">
              <Card
                maxW="270px"
                w={"270px"}
                minW={"270px"}
                shadow={"lg"}
                overflow={"hidden"}
              >
                <CardBody p={0}>
                  <Image src={Gestao} h={"200px"} objectFit={"cover"} />
                  <Stack spacing="3" h={"225px"} p={3}>
                    <Heading size="md" color={"blue.900"}>
                      GESTÃO COMERCIAL
                    </Heading>
                    <Text flex={1} fontSize={"sm"}>
                      A NK Systems é uma empresa que oferece soluções de
                      software para gestão empresarial. Através deste softwares,
                      a NK Systems ajuda empresas a gerenciar suas operações de
                      negócios, incluindo vendas, estoque, finanças e muito mais
                    </Text>
                  </Stack>
                </CardBody>
                <Divider borderColor={"gray.300"} />
                <CardFooter p={3}>
                  <Button variant="solid" colorScheme="blue" w={"100%"}>
                    Ver Planos
                  </Button>
                </CardFooter>
              </Card>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex justify={"center"} align={"center"} p={4} w="full">
              <Card
                maxW="270px"
                w={"270px"}
                minW={"270px"}
                shadow={"lg"}
                overflow={"hidden"}
              >
                <CardBody p={0}>
                  <Image src={Igreja} h={"200px"} objectFit={"cover"} />
                  <Stack spacing="3" h={"225px"} p={3}>
                    <Heading size="md" color={"blue.900"}>
                      GESTÃO DE IGREJAS
                    </Heading>
                    <Text flex={1} fontSize={"sm"}>
                      A NK Systems também oferece soluções de gerenciamento de
                      igrejas para ajudar as igrejas a gerenciar suas operações
                      diárias. O sistema possui recursos para gerenciar membros
                      da igreja, como informações de contato, histórico de
                      doações e muito mais.
                    </Text>
                  </Stack>
                </CardBody>
                <Divider borderColor={"gray.300"} />
                <CardFooter p={3}>
                  <Button variant="solid" colorScheme="blue" w={"100%"}>
                    Ver Planos
                  </Button>
                </CardFooter>
              </Card>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Layout>
  );
}
