import { authLoginState, fadeTransitionState } from "@/atoms/authLoginAtom";
import AuthenticatedPage from "@/components/AuthenticatedPage/AuthenticatedPage";
import LoginForm from "@/components/LoginForm/LoginForm";
import ResetForm from "@/components/ResetForm/ResetForm";
import SignupForm from "@/components/SignupForm/SignupForm";
import { auth } from "@/firebase/clientApp";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Fade,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export default function Home() {
  const [loginState, setLoginState] = useRecoilState(authLoginState);
  const fadeState = useRecoilValue(fadeTransitionState);
  const setFadeTransitionState = useSetRecoilState(fadeTransitionState);

  // const { status, message } = useRecoilValue(errorHandlerState);
  const [user, loading, userError] = useAuthState(auth);

  const handleClose = () => {
    setFadeTransitionState((prev: any) => ({
      ...prev,
      isOpenReset: false,
      isOpenLogin: false,
      isOpenSignup: false,
      isOpenAuth: true,
    }));

    setLoginState((prev: any) => ({
      ...prev,
      view: "main",
    }));
  };

  useEffect(() => {
    if (user) handleClose();
  }, [user]);

  return (
    <>
      <main>
        <Flex
          position="absolute"
          top={{ base: 20, lg: 6 }}
          left={{ base: 0, lg: 10 }}
          align={{ base: "center", lg: "normal" }}
          justify={{ base: "center", lg: "normal" }}
          width={{ base: "calc(100vw)", lg: "calc(1vw)" }}
        >
          <Heading className="brandMain" as="h2" size="md" color="white">
            Envelope
          </Heading>
        </Flex>
        <SimpleGrid columns={2} display={{ sm: "block", lg: "grid" }}>
          <Center bg="blue.500" height="calc(100vh)">
            <VStack
              width={{ base: "inherit", lg: "calc(50vw)" }}
              align="center"
            >
              <VStack
                spacing={6}
                width={{ base: "20em", lg: "calc(35vw)" }}
                alignItems="center"
              >
                <VStack spacing={4} alignItems="center">
                  <Heading
                    as="h2"
                    className="headerOneLeft"
                    size="2xl"
                    textAlign="center"
                    color="white"
                  >
                    Introducing our
                  </Heading>
                  <Heading
                    as="h2"
                    className="headerTwoLeft"
                    size="2xl"
                    textAlign="center"
                    color="white"
                  >
                    2020 report
                  </Heading>
                </VStack>
                <Text fontSize="xl" align="center" color="white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore aliquam suscipit reiciendis dolores atque sint neque.
                </Text>
                <Link
                  href="https://pages.hired.email/rs/289-SIY-439/images/Hired-2020-State-of-Software-Engineer-Final-PDF%20%281%29.pdf"
                  isExternal
                >
                  <Button
                    variant="outline"
                    rightIcon={<ExternalLinkIcon />}
                    height={{ base: "4em", lg: "7vh" }}
                    width={{ base: "12em", lg: "20vh" }}
                    mt={{ base: "5em", lg: "auto" }}
                  >
                    View Report
                  </Button>
                </Link>
              </VStack>
            </VStack>
          </Center>
          <Center bg="gray.50" height="calc(100vh)">
            <VStack spacing={10} alignItems={{ base: "center", lg: "start" }}>
              <VStack spacing={4} alignItems={{ base: "center", lg: "start" }}>
                <Heading
                  as="h2"
                  size="2xl"
                  className="headerOneRight"
                  color="blue.500"
                >
                  {loginState.view === "login" ||
                  loginState.view === "signup" ||
                  loginState.view === "resetPassword"
                    ? "Welcome back"
                    : "Hello user!"}
                </Heading>
                <Heading
                  as="h3"
                  size="lg"
                  className="headerTwoRight"
                  color="gray.500"
                >
                  {loginState.view === "login" ||
                  loginState.view === "signup" ||
                  loginState.view === "resetPassword"
                    ? "Sign in to continue"
                    : "Glad to have you back!"}
                </Heading>
              </VStack>
              {loginState.view === "login" && (
                <Fade in={fadeState.isOpenLogin}>
                  <LoginForm
                    size="lg"
                    width={{ base: "20em", lg: "calc(35vw)" }}
                  />
                </Fade>
              )}
              {loginState.view === "signup" && (
                <Fade in={fadeState.isOpenSignup}>
                  <SignupForm
                    size="lg"
                    width={{ base: "20em", lg: "calc(35vw)" }}
                  />
                </Fade>
              )}
              {loginState.view === "resetPassword" && (
                <Fade in={fadeState.isOpenReset}>
                  <ResetForm
                    size="lg"
                    width={{ base: "20em", lg: "calc(35vw)" }}
                  />
                </Fade>
              )}
              {loginState.view !== "login" &&
                loginState.view !== "signup" &&
                loginState.view !== "resetPassword" && (
                  <Fade in={fadeState.isOpenAuth}>
                    <AuthenticatedPage
                      size="lg"
                      width={{ base: "20em", lg: "calc(35vw)" }}
                    />
                  </Fade>
                )}
            </VStack>
          </Center>
        </SimpleGrid>
      </main>
    </>
  );
}
