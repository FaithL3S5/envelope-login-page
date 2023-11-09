import AuthenticatedPage from "@/components/AuthenticatedPage/AuthenticatedPage";
import { Center, VStack } from "@chakra-ui/react";

export default {
  title: "Components/Authenticated",
  component: AuthenticatedPage,
  argTypes: { onClick: { action: "clicked" } },
};

export const AuhtenticatedDefault = () => (
  <Center bg="gray.50" height="calc(100vh)">
    <VStack alignItems="center">
      <AuthenticatedPage size="lg" width={{ base: "20em", lg: "calc(35vw)" }} />
    </VStack>
  </Center>
);
