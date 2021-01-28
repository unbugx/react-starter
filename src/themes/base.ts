import { createMuiTheme, Theme, ThemeOptions } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import { grey } from '@material-ui/core/colors';

export function createOverrides(theme: Theme): ThemeOptions['overrides'] {
  /* eslint-disable @typescript-eslint/naming-convention */
  return {
    MuiButton: {
      root: {
        background: (props) => {
          const { color = 'primary' } = props as { color: 'primary' | 'secondary' };
          return theme.palette[color][theme.palette.type];
        },
      },
    },
  };
  /* eslint-enable @typescript-eslint/naming-convention */
}

const { augmentColor } = createPalette({
  tonalOffset: 0.2,
});

// Create a theme instance.
export const baseTheme = createMuiTheme({
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
    blockBackground: augmentColor({
      main: grey['50'],
    }),
  },
});

baseTheme.overrides = createOverrides(baseTheme);
