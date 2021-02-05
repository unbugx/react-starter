import { createMuiTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import { createOverrides } from 'themes/overrides';

const { augmentColor } = createPalette({
  tonalOffset: 0.2,
});

// Create a theme instance.
export const base = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      xm: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    backgroundPrimary: augmentColor({
      main: '#FFFFFf',
    }),
    backgroundSecondary: augmentColor({
      main: '#FFFFFf',
    }),
  },
});

base.overrides = createOverrides(base);
