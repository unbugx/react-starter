import { createMuiTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import { base } from 'themes/base';
import { createOverrides } from 'themes/overrides';

const { augmentColor } = createPalette({
  tonalOffset: 0.2,
});

// Olive: #A3BCB6
// Green Leaf: #39603D
// Brown Grey: #3C403D
// Tanly: #DADED4
// White: #FFFFFF

// Create a theme instance.
export const greenery = createMuiTheme(
  base,
  {
    palette: {
      primary: augmentColor({
        main: '#39603D',
        contrastText: '#3C403D',
      }),
      secondary: augmentColor({
        main: '#3C403D',
        contrastText: '#3C403D',
      }),
      backgroundPrimary: augmentColor({
        main: '#39603D',
      }),
      backgroundSecondary: augmentColor({
        main: '#DADED4', // #A3BCB6
      }),
      text: {
        primary: '#3C403D',
        secondary: '#3C403D',
      },
    },
  },
);

greenery.overrides = createOverrides(greenery, {
  MuiButton: {
    root: {
      border: '2px solid',
      background: 'transparent',
      borderColor: (props) => {
        const { color = 'primary' } = props as { color: 'primary' | 'secondary' };
        return greenery.palette[color][greenery.palette.type];
      },
      borderRadius: 0,
      textTransform: 'uppercase',
    },
    containedSizeSmall: {
      background: 'transparent',
      '&:hover': {
        background: (props) => {
          const { color = 'primary' } = props as { color: 'primary' | 'secondary' };
          return greenery.palette[color].light;
        },
        color: '#FFFFFF',
      },
    },
  },
});
