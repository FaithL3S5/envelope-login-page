import { auth } from "@/firebase/clientApp";
import { Center, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import RightContent from "./Right Content/RightContent";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <SimpleGrid columns={2} position="absolute">
      <Center
        px="10"
        bg="blue.500"
        height="calc(10vh)"
        borderBottom={1}
        borderStyle={"solid"}
        borderColor="gray.50"
      >
        <VStack width="calc(50vw)" align="start">
          <Heading as="h2" size="md" color="white">
            Envelope
          </Heading>
        </VStack>
      </Center>
      <Center
        px="10"
        bg="gray.50"
        height="calc(10vh)"
        borderBottom={1}
        borderStyle={"solid"}
        borderColor="blue.500"
      >
        <VStack width="calc(50vw)" align="end">
          <RightContent user={user} />
        </VStack>
      </Center>
    </SimpleGrid>
  );
};
export default Navbar;
