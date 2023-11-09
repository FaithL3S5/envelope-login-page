import useWindowSize from "@/reusables/useWindowSize";
import {
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  FormControl,
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

const SignupForm = ({ error }: Props) => {
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
                </FormControl>
                <Spacer />
                <FormControl variant="testing" id="password-control">
                  <Input
                    size="lg"
                    fontSize="md"
                    type="password"
                    name="confirmPassword"
                    id="confirm-password-input"
                  />
                  <FormLabel htmlFor="confirm-password-input">
                    <Text fontWeight="bold" fontSize="18px" color="gray.500">
                      Confirm Password
                    </Text>
                  </FormLabel>
                </FormControl>
                <Spacer />
                <Spacer />
                <Flex direction="row">
                  <Text
                    fontWeight="bold"
                    mt={{ base: "-0.5em", lg: "2" }}
                    fontSize="15px"
                    color="gray.500"
                  >
                    Already have account?
                    {useWindowSize().width < 768 ? <br /> : " "}
                    <Link color="blue.500" cursor="pointer">
                      Sign in
                    </Link>
                  </Text>
                  <Spacer />
                  <Button float="right" size="lg">
                    Sign up
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

export const SingupDefault = () => <SignupForm error={false} />;
export const SingupError = () => <SignupForm error={true} />;

export default {
  title: "Components/Signup",
  component: SignupForm,
  argTypes: { onClick: { action: "clicked" } },
};
