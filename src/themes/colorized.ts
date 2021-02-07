import { createMuiTheme, Theme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import { palettes } from 'themes/palettes';
import { createOverrides } from 'themes/overrides';

const { augmentColor } = createPalette({
  tonalOffset: 0.2,
});

export function createTheme(mainTheme: Theme, paletteId: string, paletteVariant = 0) {
  const palette = palettes[paletteId];
  const [
    backgroundPrimary,
    backgroundSecondary,
    primary,
    secondary,
    textPrimary,
  ] = palette.colors[paletteVariant];

  const theme = createMuiTheme(
    mainTheme,
    {
      palette: {
        primary: augmentColor({
          main: primary,
          // contrastText: colorSet.primaryContrastText,
        }),
        secondary: augmentColor({
          main: secondary,
          // contrastText: colorSet.secondaryContrastText,
        }),
        backgroundPrimary: augmentColor({
          main: backgroundPrimary,
        }),
        backgroundSecondary: augmentColor({
          main: backgroundSecondary,
        }),
        text: {
          primary: textPrimary,
          secondary: textPrimary,
        },
      },
    },
  );

  theme.overrides = createOverrides(theme);

  return theme;
}
