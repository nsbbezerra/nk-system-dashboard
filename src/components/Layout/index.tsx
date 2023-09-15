import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { ElementType, ReactNode, useEffect, useState } from "react";

import Logo from "../../assets/logo-white.svg";
import {
  ArrowsInLineHorizontal,
  ArrowsOutLineHorizontal,
  FloppyDisk,
  House,
  Info,
  PhoneCall,
  SignIn,
  SignOut,
  Star,
  Tag,
  User,
  UserList,
} from "@phosphor-icons/react";
import { useLocation, useNavigate } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";

interface Props {
  children?: ReactNode | ReactNode[];
  pageIcon?: ElementType;
  pageTitle?: string;
}

export default function Layout({ children, pageIcon: Icon, pageTitle }: Props) {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [activateItem, setActivateItem] = useState<string>("/");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActivateItem(pathname);
  }, [pathname]);

  return (
    <Box w={"100vw"} h={"100vh"} bg={"#fafafa"}>
      <Box h={"60px"} bg="white" shadow={"md"} zIndex={100}>
        <Flex
          justifyContent={"space-between"}
          pr={[3, 8, 8, 8, 8]}
          align={"center"}
        >
          <Flex alignItems={"center"} gap={5}>
            <Flex
              bg={"blue.900"}
              w={["65px", "65px", "280px", "280px", "280px"]}
              h={"60px"}
              px={[3, 3, 8, 8, 8]}
              roundedRight={"20px"}
              alignItems={"center"}
              gap={4}
            >
              <Image src={Logo} w={"70px"} draggable={false} />
              <Text
                as={"h1"}
                fontFamily={"heading"}
                fontSize={"4xl"}
                userSelect={"none"}
                color={"gray.50"}
                display={["none", "none", "block", "block", "block"]}
              >
                SYSTEMS
              </Text>
            </Flex>

            <Flex align={"center"} gap={3} fontSize={"lg"}>
              {Icon && <Icon />}
              {pageTitle && <Text>{pageTitle}</Text>}
            </Flex>
          </Flex>

          <Flex
            gap={5}
            align={"center"}
            w={["fit-content", "fit-content", "250px", "250px", "250px"]}
          >
            <Avatar size={"sm"} />
            <Stack
              spacing={4}
              display={["none", "none", "flex", "flex", "flex"]}
            >
              <Text fontWeight={600} lineHeight={"0"}>
                NK Informática
              </Text>
              <Text fontWeight={300} lineHeight={"0"} fontSize={"xs"}>
                40.526.622/0001-72
              </Text>
            </Stack>
          </Flex>
        </Flex>
      </Box>

      <Flex
        h={"calc(100% - 60px)"}
        maxH={"calc(100% - 60px)"}
        overflow={"hidden"}
      >
        <Flex
          w={drawerOpen ? "280px" : "65px"}
          justify={"center"}
          align={"center"}
          h={"100%"}
          transition={"all .3s"}
          flexShrink={0}
        >
          <Box
            roundedRight={"20px"}
            shadow={"lg"}
            w={"100%"}
            h={"100%"}
            bg={"#fff"}
            pos={"relative"}
            overflowX={"hidden"}
            overflowY={"auto"}
            pb={"40px"}
            borderWidth={"1px"}
          >
            <Scrollbars autoHide>
              <Stack spacing={3} px={drawerOpen ? 4 : 2} py={4}>
                <Tooltip label="Início" placement="right" hasArrow>
                  <Button
                    leftIcon={<House />}
                    variant={"ghost"}
                    justifyContent={"start"}
                    colorScheme="blue"
                    bg={activateItem === "/" ? "blue.50" : ""}
                    transition={"all .3s"}
                    onClick={() => navigate("/")}
                  >
                    {drawerOpen && "Início"}
                  </Button>
                </Tooltip>
                <Tooltip label="Produtos e Planos" placement="right" hasArrow>
                  <Button
                    leftIcon={<Tag />}
                    variant={"ghost"}
                    justifyContent={"start"}
                    colorScheme="blue"
                    bg={activateItem === "/produtos" ? "blue.50" : ""}
                    transition={"all .3s"}
                    onClick={() => navigate("/produtos")}
                  >
                    {drawerOpen && "Produtos e Planos"}
                  </Button>
                </Tooltip>
                <Tooltip label="Avaliações" placement="right" hasArrow>
                  <Button
                    leftIcon={<Star />}
                    variant={"ghost"}
                    justifyContent={"start"}
                    colorScheme="blue"
                    bg={activateItem === "/avaliacoes" ? "blue.50" : ""}
                    transition={"all .3s"}
                    onClick={() => navigate("/avaliacoes")}
                  >
                    {drawerOpen && "Avaliações"}
                  </Button>
                </Tooltip>
                <Divider />
                <Tooltip label="Sobre a Empresa" placement="right" hasArrow>
                  <Button
                    leftIcon={<Info />}
                    variant={"ghost"}
                    justifyContent={"start"}
                    colorScheme="blue"
                    bg={activateItem === "/sobre" ? "blue.50" : ""}
                    transition={"all .3s"}
                    onClick={() => navigate("/sobre")}
                  >
                    {drawerOpen && "Sobre a Empresa"}
                  </Button>
                </Tooltip>
                <Tooltip label="Contato" placement="right" hasArrow>
                  <Button
                    leftIcon={<PhoneCall />}
                    variant={"ghost"}
                    justifyContent={"start"}
                    colorScheme="blue"
                    bg={activateItem === "/contato" ? "blue.50" : ""}
                    transition={"all .3s"}
                    onClick={() => navigate("/contato")}
                  >
                    {drawerOpen && "Contato"}
                  </Button>
                </Tooltip>
                <Tooltip label="Nossos Clientes" placement="right" hasArrow>
                  <Button
                    leftIcon={<UserList />}
                    variant={"ghost"}
                    justifyContent={"start"}
                    colorScheme="blue"
                    bg={activateItem === "/nossos-clientes" ? "blue.50" : ""}
                    transition={"all .3s"}
                    onClick={() => navigate("/nossos-clientes")}
                  >
                    {drawerOpen && "Nossos Clientes"}
                  </Button>
                </Tooltip>
                <Divider />

                <Button
                  leftIcon={<User />}
                  variant={"solid"}
                  justifyContent={"start"}
                  colorScheme="blue"
                  transition={"all .3s"}
                >
                  {drawerOpen && "Área do Cliente"}
                </Button>

                <Tooltip label="Login" placement="right" hasArrow>
                  <Button
                    leftIcon={<SignIn />}
                    variant={"ghost"}
                    justifyContent={"start"}
                    colorScheme="blue"
                    bg={activateItem === "/login" ? "blue.50" : ""}
                    transition={"all .3s"}
                    onClick={() => navigate("/")}
                  >
                    {drawerOpen && "Login"}
                  </Button>
                </Tooltip>
                <Tooltip label="Cadastre-se" placement="right" hasArrow>
                  <Button
                    leftIcon={<FloppyDisk />}
                    variant={"ghost"}
                    justifyContent={"start"}
                    colorScheme="blue"
                    bg={activateItem === "/cadastro" ? "blue.50" : ""}
                    transition={"all .3s"}
                    onClick={() => navigate("/cadastro")}
                  >
                    {drawerOpen && "Cadastre-se"}
                  </Button>
                </Tooltip>
                <Tooltip label="Sair" placement="right" hasArrow>
                  <Button
                    leftIcon={<SignOut />}
                    variant={"ghost"}
                    justifyContent={"start"}
                    colorScheme="red"
                    bg={activateItem === "/logout" ? "blue.50" : ""}
                    transition={"all .3s"}
                    onClick={() => navigate("/logout")}
                  >
                    {drawerOpen && "Sair"}
                  </Button>
                </Tooltip>
              </Stack>
            </Scrollbars>

            <Tooltip
              label={drawerOpen ? "Encolher" : "Expandir"}
              placement="top"
              hasArrow
            >
              <IconButton
                aria-label="expand"
                icon={
                  drawerOpen ? (
                    <ArrowsInLineHorizontal />
                  ) : (
                    <ArrowsOutLineHorizontal />
                  )
                }
                onClick={() => setDrawerOpen((old) => !old)}
                position={"fixed"}
                bottom={0}
                left={0}
                right={0}
                roundedTop={"none"}
                roundedBottomRight={"20px"}
                roundedBottomLeft={"none"}
                w={drawerOpen ? "280px" : "65px"}
                transition={"all .3s"}
                colorScheme="blackAlpha"
              />
            </Tooltip>
          </Box>
        </Flex>
        <Box
          w={"100%"}
          maxH={"100%"}
          overflowY={"auto"}
          overflowX={"hidden"}
          minW={"300px"}
        >
          <Scrollbars>
            <Container maxW={"6xl"} px={4} pt={8} overflowX={"hidden"}>
              {children}
            </Container>
          </Scrollbars>
        </Box>
      </Flex>
    </Box>
  );
}
