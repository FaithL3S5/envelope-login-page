// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { Button } from "./button";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  fonts: {
    nody: "Open Sans, sans-serif",
  },
  components: {
    Button,
    Form: {
      variants: {
        testing: {
          container: {
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
              ...activeLabelStyles,
            },
          },
        },
      },
    },
  },
});
