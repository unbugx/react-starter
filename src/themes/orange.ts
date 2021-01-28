import { createMuiTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import { baseTheme, createOverrides } from 'themes/base';
import { deepOrange, grey, orange } from '@material-ui/core/colors';

const { augmentColor } = createPalette({
  tonalOffset: 0.2,
});

// Create a theme instance.
export const orangeTheme = createMuiTheme(
  baseTheme,
  {
    palette: {
      primary: augmentColor({
        main: orange['500'],
      }),
      secondary: augmentColor({
        main: deepOrange['900'],
      }),
      blockBackground: augmentColor({
        main: grey['800'],
      }),
      type: 'dark',
    },
  },
);

orangeTheme.overrides = createOverrides(orangeTheme);
