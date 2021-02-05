import { createMuiTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import { base } from 'themes/base';
import { createOverrides } from 'themes/overrides';

const { augmentColor } = createPalette({
  tonalOffset: 0.2,
});

// Dark Green: #164A41
// Medium Green: #4D774E
// Light Green: #9DC88D
// Natural Yellow: #F1B24A
// White: #FFFFFF

// Create a theme instance.
export const cactus = createMuiTheme(
  base,
  {
    palette: {
      primary: augmentColor({
        main: '#F1B24A',
        contrastText: '#FFFFFF',
      }),
      secondary: augmentColor({
        main: '#F1B24A',
        contrastText: '#FFFFFF',
      }),
      backgroundPrimary: augmentColor({
        main: '#164A41',
      }),
      backgroundSecondary: augmentColor({
        main: '#164A41',
      }),
      text: {
        primary: '#9DC88D',
        secondary: '#9DC88D',
      },
    },
  },
);

cactus.overrides = createOverrides(cactus, {
  MuiButton: {
    root: {
      border: '2px solid',
      background: 'transparent',
      borderColor: cactus.palette.primary.main,
    },
    containedSizeLarge: {
      background: 'transparent',
    },
  },
});
