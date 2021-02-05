import { createMuiTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import { base } from 'themes/base';
import { deepOrange, grey, orange as orangeColor } from '@material-ui/core/colors';
import { createOverrides } from 'themes/overrides';

const { augmentColor } = createPalette({
  tonalOffset: 0.2,
});

// Create a theme instance.
export const orange = createMuiTheme(
  base,
  {
    palette: {
      primary: augmentColor({
        main: orangeColor['500'],
      }),
      secondary: augmentColor({
        main: deepOrange['900'],
      }),
      backgroundPrimary: augmentColor({
        main: grey['800'],
      }),
      backgroundSecondary: augmentColor({
        main: orangeColor['200'],
      }),
      type: 'light',
    },
  },
);

orange.overrides = createOverrides(orange);
