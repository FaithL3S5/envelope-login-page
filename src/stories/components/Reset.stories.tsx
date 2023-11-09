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

const ResetForm = ({ error }: Props) => {
  return (
    <Center bg="gray.50" height="calc(100vh)">
      <VStack alignItems="center">
        <Card size="lg" width={{ base: "20em", lg: "calc(35vw)" }}>
          <CardBody>
            <form style={{ padding: "10px" }}>
              <Flex direction="column" height="calc(18vh)">
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
                <Flex direction="row">
                  <Text
                    fontWeight="bold"
                    mt={2}
                    fontSize="15px"
                    color="gray.500"
                  >
                    Go back to{useWindowSize().width < 768 ? <br /> : " "}
                    <Link color="blue.500" cursor="pointer">
                      Sign in
                    </Link>
                  </Text>
                  <Spacer />
                  <Button float="right" size="lg">
                    Reset
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

export const ResetDefault = (error: any) => <ResetForm error={false} />;

export const ResetError = (error: any) => <ResetForm error={true} />;

export default {
  title: "Components/Reset Password",
  component: ResetForm,
  argTypes: { onClick: { action: "clicked" } },
};
