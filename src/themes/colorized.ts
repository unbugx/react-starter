import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { base } from 'themes/base';
import createPalette from '@material-ui/core/styles/createPalette';

interface IColorSet {
  primary: string,
  secondary: string,
  primaryContrastText?: string,
  secondaryContrastText: string,
  backgroundPrimary: string,
  backgroundSecondary: string,
  textPrimary: string,
  textSecondary?: string,
}

const { augmentColor } = createPalette({
  tonalOffset: 0.2,
});

export function createTheme(colorSet: IColorSet, ...themes: Theme[]) {
  createMuiTheme(
    base,
    ...themes,
    {
      palette: {
        primary: augmentColor({
          main: colorSet.primary,
          contrastText: colorSet.primaryContrastText,
        }),
        secondary: augmentColor({
          main: colorSet.secondary,
          contrastText: colorSet.secondaryContrastText,
        }),
        backgroundPrimary: augmentColor({
          main: colorSet.backgroundPrimary,
        }),
        backgroundSecondary: augmentColor({
          main: colorSet.backgroundSecondary,
        }),
        text: {
          primary: colorSet.textPrimary,
          secondary: colorSet.textSecondary || colorSet.textPrimary,
        },
      },
    },
  );
}
