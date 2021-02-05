import { createMuiTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import { base } from 'themes/base';
import { createOverrides } from 'themes/overrides';

const { augmentColor } = createPalette({
  tonalOffset: 0.2,
});

// Create a theme instance.
export const blue = createMuiTheme(
  base,
  {
    palette: {
      primary: augmentColor({
        main: '#007CC7',
        contrastText: '#EEFBFB',
      }),
      secondary: augmentColor({
        main: '#203647',
        contrastText: '#EEFBFB',
      }),
      backgroundPrimary: augmentColor({
        main: '#12232E',
      }),
      backgroundSecondary: augmentColor({
        main: '#4DA8DA',
      }),
      text: {
        primary: '#EEFBFB',
        secondary: '#EEFBFB',
      },
    },
  },
);

// border-radius: 15px;

blue.overrides = createOverrides(blue);
