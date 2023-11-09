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
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

type Props = {
  size: any;
  width: any;
};

export default function SignupForm({ size, width }: Props) {
  const setAuthLoginState = useSetRecoilState(authLoginState);
  const setFadeTransitionState = useSetRecoilState(fadeTransitionState);
  // const setGlobalErrorState = useSetRecoilState(errorHandlerState);

  // const firstUpdate = useRef(0);

  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, user, userLoading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setGlobalErrorState((prev: any) => ({
    //   ...prev,
    //   status: false,
    //   message: "",
    // }));

    if (error) setError("");
    if (signUpForm.password !== signUpForm.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // useLayoutEffect(() => {
  //   if (firstUpdate.current < 2) {
  //     firstUpdate.current++;
  //     return;
  //   }

  //   setGlobalErrorState((prev: any) => ({
  //     ...prev,
  //     status: true,
  //     message:
  //       error ||
  //       FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS],
  //   }));
  // });

  // useEffect(() => {
  //   setGlobalErrorState((prev: any) => ({
  //     ...prev,
  //     status: true,
  //     message:
  //       error ||
  //       FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS],
  //   }));
  // }, [error, userError]);

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
              </FormControl>
              <Spacer />
              <FormControl variant="testing" id="password-control">
                <Input
                  onChange={onChange}
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
                  type="submit"
                  float="right"
                  size="lg"
                  isLoading={userLoading}
                  id="signUpButton"
                >
                  Sign up
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
            {error ||
              FIREBASE_ERRORS[
                userError?.message as keyof typeof FIREBASE_ERRORS
              ] ||
              userError?.message}
          </Text>
        </CardBody>
      </Card>
    </>
  );
}
