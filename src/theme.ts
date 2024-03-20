import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    Neutral: {
      100: 'rgba(241, 241, 255, 1)',
      200: 'rgba(227, 227, 250, 1)',
      700: 'rgba(150, 150, 179, 1)',
      800: 'rgba(132, 132, 161, 1)',
    },
    Primary: {
      Blue: 'rgba(52, 70, 238, 1)',
      Navy: 'rgba(3, 16, 61, 1)',
    },
  },
  fonts: {
    body: `'Gotham A', sans-serif`,
    heading: `'Larken', sans-serif`,
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: '600',
      },
    },
  },
});

export default theme;
