import { authLoginState, fadeTransitionState } from "@/atoms/authLoginAtom";
import { auth } from "@/firebase/clientApp";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { useSetRecoilState } from "recoil";

type Props = {
  size: any;
  width: any;
};

export default function AuthenticatedPage({ size, width }: Props) {
  const setAuthLoginState = useSetRecoilState(authLoginState);
  const setFadeTransitionState = useSetRecoilState(fadeTransitionState);

  return (
    <Card size={size} width={width}>
      <CardBody>
        <Heading id="authenticatedHeader" size="md" mb={2}>
          Congratulations!
        </Heading>
        <Text size="lg">
          This means you&apos;ve successfully{" "}
          <Text as="span" size="lg" color="green.500">
            logged in!
          </Text>
        </Text>
        <Text size="lg">
          Checkout my{" "}
          <Text as="span" size="lg" color="orange.500">
            GitHub
          </Text>{" "}
          below to see more awesome stuff!
        </Text>
        <Text size="lg">
          Or click the{" "}
          <Text as="span" size="lg" color="red.500">
            Logout
          </Text>{" "}
          button below to log back out...
        </Text>
        <HStack mt={3}>
          <Link href="https://github.com/FaithL3S5" isExternal>
            <Button rightIcon={<ExternalLinkIcon />}>GitHub</Button>
          </Link>
          <Spacer />
          <Button
            bgColor="red.500"
            id="logOutButton"
            onClick={() => {
              signOut(auth);
              setAuthLoginState((prev) => ({
                ...prev,
                view: "login",
              }));
              setFadeTransitionState((prev: any) => ({
                ...prev,
                isOpenReset: false,
                isOpenLogin: true,
                isOpenSignup: false,
                isOpenAuth: false,
              }));
            }}
          >
            Logout
          </Button>
        </HStack>
      </CardBody>
    </Card>
  );
}
