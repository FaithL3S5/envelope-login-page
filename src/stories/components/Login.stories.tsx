import useWindowSize from "@/reusables/useWindowSize";
import {
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Link,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";

type Props = {
  error: Boolean;
};

const LoginForm = ({ error }: Props) => {
  return (
    <Center bg="gray.50" height="calc(100vh)">
      <VStack alignItems="center">
        <Card size="lg" width={{ base: "20em", lg: "calc(35vw)" }}>
          <CardBody>
            <form style={{ padding: "10px" }}>
              <Flex direction="column" height="calc(32vh)">
                <FormControl variant="testing" id="email-control">
                  <Input
                    size="lg"
                    fontSize="md"
                    type="email"
                    name="email"
                    id="email-input"
                  />
                  <FormLabel htmlFor="email-input">
                    <Text fontWeight="bold" fontSize="18px" color="gray.500">
                      Email
                    </Text>
                  </FormLabel>
                </FormControl>
                <Spacer />
                <FormControl variant="testing" id="password-control">
                  <Input
                    size="lg"
                    fontSize="md"
                    type="password"
                    name="password"
                    id="password-input"
                  />
                  <FormLabel htmlFor="password-input">
                    <Text fontWeight="bold" fontSize="18px" color="gray.500">
                      Password
                    </Text>
                  </FormLabel>
                  <FormHelperText>
                    <Link
                      fontWeight="bold"
                      fontSize="15px"
                      color="blue.500"
                      cursor="pointer"
                    >
                      Forgot password?
                    </Link>
                  </FormHelperText>
                </FormControl>
                {/* <FormErrorMessage>
                        Your First name is invalid
                      </FormErrorMessage> */}
                <Spacer />
                <Flex direction="row">
                  <Text
                    fontWeight="bold"
                    mt={2}
                    fontSize="15px"
                    color="gray.500"
                  >
                    New user? {useWindowSize().width < 768 ? <br /> : " "}
                    <Link color="blue.500" cursor="pointer">
                      Create account
                    </Link>
                  </Text>
                  <Spacer />
                  <Button float="right" size="lg">
                    Sign in
                  </Button>
                </Flex>
              </Flex>
            </form>
          </CardBody>
        </Card>
        <Spacer />
        <Card hidden={!error} backgroundColor="red.500">
          <CardBody>
            <Text textAlign="center" color="white" fontSize="10pt">
              An Error would Looked Like This
            </Text>
          </CardBody>
        </Card>
      </VStack>
    </Center>
  );
};

export const LoginDefault = () => <LoginForm error={false} />;

export const LoginError = () => <LoginForm error={true} />;

export default {
  title: "Components/Login",
  component: LoginForm,
};
