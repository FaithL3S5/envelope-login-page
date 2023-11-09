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
  FormHelperText,
  FormLabel,
  Input,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

type Props = {
  size: any;
  width: any;
};

export default function LoginForm({ size, width }: Props) {
  const setAuthLoginState = useSetRecoilState(authLoginState);
  const setFadeTransitionState = useSetRecoilState(fadeTransitionState);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmailAndPassword, user, userLoading, userError] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <Card size={size} width={width}>
        <CardBody>
          <form onSubmit={onSubmit} style={{ padding: "10px" }}>
            <Flex direction="column" height="calc(32vh)">
              <FormControl variant="testing" id="email-control">
                <Input
                  onChange={onChange}
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
                  onChange={onChange}
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
                    id="forgetPasswordLink"
                    fontWeight="bold"
                    fontSize="15px"
                    color="blue.500"
                    cursor="pointer"
                    onClick={() => {
                      setAuthLoginState((prev) => ({
                        ...prev,
                        view: "resetPassword",
                      }));
                      setFadeTransitionState((prev: any) => ({
                        ...prev,
                        isOpenReset: true,
                        isOpenLogin: false,
                        isOpenSignup: false,
                        isOpenAuth: false,
                      }));
                    }}
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
                <Text fontWeight="bold" mt={2} fontSize="15px" color="gray.500">
                  New user? {useWindowSize().width < 768 ? <br /> : " "}
                  <Link
                    id="signUpLink"
                    color="blue.500"
                    cursor="pointer"
                    onClick={() => {
                      setAuthLoginState((prev) => ({
                        ...prev,
                        view: "signup",
                      }));
                      setFadeTransitionState((prev: any) => ({
                        ...prev,
                        isOpenReset: false,
                        isOpenLogin: false,
                        isOpenSignup: true,
                        isOpenAuth: false,
                      }));
                    }}
                  >
                    Create account
                  </Link>
                </Text>
                <Spacer />
                <Button
                  type="submit"
                  float="right"
                  size="lg"
                  isLoading={userLoading}
                  id="signInButton"
                >
                  Sign in
                </Button>
              </Flex>
            </Flex>
          </form>
        </CardBody>
      </Card>
      <Spacer />
      <Card id="errorCard" hidden={!userError} backgroundColor="red.500">
        <CardBody>
          <Text id="errorText" textAlign="center" color="white" fontSize="10pt">
            {FIREBASE_ERRORS[
              userError?.message as keyof typeof FIREBASE_ERRORS
            ] || userError?.message}
          </Text>
        </CardBody>
      </Card>
    </>
  );
}
