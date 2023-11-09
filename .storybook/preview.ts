import type { Preview } from "@storybook/react";
import { theme } from "../src/styles/theme";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
    },
    chakra: {
      theme,
    },
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
