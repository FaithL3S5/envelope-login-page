import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    _focus: {
      boxShadow: "none",
    },
  },
  variants: {
    solid: {
      color: "white",
      border: "1px solid",
      borderColor: "transparent",
      bg: "blue.500",
      _hover: {
        color: "black",
        border: "1px solid",
        borderColor: "black",
        bg: "white",
      },
    },
    outline: {
      color: "white",
      border: "1px solid",
      borderColor: "white",
      _hover: {
        color: "black"
      }
    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
    },
  },
}