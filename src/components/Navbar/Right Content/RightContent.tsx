import { authLoginState } from "@/atoms/authLoginAtom";
import { auth } from "@/firebase/clientApp";
import { Flex, Heading } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import { useSetRecoilState } from "recoil";

type RightContentProps = {
  user: any;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  const setAuthLoginState = useSetRecoilState(authLoginState);

  return (
    <>
      <Flex justify="center" align="center">
        {user ? (
          <Heading
            as="button"
            size="md"
            color="Black"
            onClick={() => {
              signOut(auth);
              setAuthLoginState((prev: any) => ({
                ...prev,
                view: "login",
              }));
            }}
          >
            Logout
          </Heading>
        ) : (
          <></>
        )}
      </Flex>
    </>
  );
};
export default RightContent;
