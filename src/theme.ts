// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#885FFF",
    100: "#885FFF",
    // 800: "#153e75",
    // 700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

export default theme;
