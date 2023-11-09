import { authLoginState, fadeTransitionState } from "@/atoms/authLoginAtom";
import { auth } from "@/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/firebase/errors";
import useWindowSize from "@/reusables/useWindowSize";
import {
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

type Props = {
  size: any;
  width: any;
};

export default function ResetForm({ size, width }: Props) {
  const setAuthLoginState = useSetRecoilState(authLoginState);
  const setFadeTransitionState = useSetRecoilState(fadeTransitionState);

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const [sendPasswordResetEmail, userLoading, userError] =
    useSendPasswordResetEmail(auth);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const sentStatus = await sendPasswordResetEmail(email);
    setSuccess(sentStatus);
  };

  return (
    <>
      <Card size={size} width={width}>
        <CardBody>
          <form onSubmit={onSubmit} style={{ padding: "10px" }}>
            <Flex direction="column" height="calc(18vh)">
              <FormControl variant="testing" id="email-control">
                <Input
                  onChange={(event) => setEmail(event.target.value)}
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
                <Text fontWeight="bold" mt={2} fontSize="15px" color="gray.500">
                  Go back to{useWindowSize().width < 768 ? <br /> : " "}
                  <Link
                    color="blue.500"
                    cursor="pointer"
                    onClick={() => {
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
                    Sign in
                  </Link>
                </Text>
                <Spacer />
                <Button
                  id="resetPasswordButton"
                  type="submit"
                  float="right"
                  size="lg"
                  isLoading={userLoading}
                >
                  Reset
                </Button>
              </Flex>
            </Flex>
          </form>
        </CardBody>
      </Card>
      <Spacer />
      <Card hidden={!userError} backgroundColor="red.500">
        <CardBody>
          <Text textAlign="center" color="white" fontSize="10pt">
            {FIREBASE_ERRORS[
              userError?.message as keyof typeof FIREBASE_ERRORS
            ] || userError?.message}
          </Text>
        </CardBody>
      </Card>
      <Spacer />
      <Card id="successCard" hidden={!success} backgroundColor="green.500">
        <CardBody>
          <Text
            id="successText"
            textAlign="center"
            color="white"
            fontSize="10pt"
          >
            Password reset request has been sent!
          </Text>
        </CardBody>
      </Card>
    </>
  );
}
