import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    Teal: "#3398B6",
    DarkTeal: "#296491",
    BrightTurquoise: "#70D0EC",
    DarkBlue: "#032845",
  },
  fonts: {
    body: `'Gotham A', sans-serif`,
    heading: `'Larken', sans-serif`,
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "600",
      },
    },
  },
});

export default theme;
