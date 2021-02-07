import { Theme, ThemeOptions } from '@material-ui/core/styles';
import merge from 'deepmerge';

type TOptions = NonNullable<ThemeOptions['overrides']>;

export function createDefaultOverrides(theme: Theme): TOptions {
  return {
    MuiButton: {
      containedPrimary: {
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        borderRadius: 21,
        textTransform: 'capitalize',
        '&:hover': {
          borderColor: theme.palette.primary.dark,
        },
      },
      containedSecondary: {
        border: '1px solid',
        borderColor: () => {
          if (theme.palette.primary.main === theme.palette.secondary.main) {
            return theme.palette.primary.main;
          }

          return theme.palette.secondary.main;
        },
        backgroundColor: () => {
          if (theme.palette.primary.main === theme.palette.secondary.main) {
            return 'transparent';
          }

          return theme.palette.secondary.main;
        },
        color: () => {
          if (theme.palette.primary.main === theme.palette.secondary.main) {
            return theme.palette.primary.main;
          }

          return theme.palette.secondary.contrastText;
        },
        borderRadius: 21,
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: () => {
            if (theme.palette.primary.main === theme.palette.secondary.main) {
              return theme.palette.backgroundPrimary.light;
            }

            return theme.palette.secondary.dark;
          },
          borderColor: () => {
            if (theme.palette.primary.main === theme.palette.secondary.main) {
              return theme.palette.primary.main;
            }

            return theme.palette.secondary.dark;
          },
        },
      },
      containedSizeSmall: {
        padding: '4px 20px',
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: theme.palette.backgroundPrimary.main,
      },
    },
    MuiCard: {
      root: {
        // backgroundColor: theme.palette.backgroundSecondary[theme.palette.type],
      },
    },
    MuiCardActions: {
      root: {
        padding: 16,
      },
    },
    MuiContainer: {
      root: {
        [theme.breakpoints.down('sm')]: {
          width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
          width: 576,
        },
        [theme.breakpoints.up('xm')]: {
          width: 768,
        },
        [theme.breakpoints.up('md')]: {
          width: 960,
        },
        [theme.breakpoints.up('lg')]: {
          width: 1152,
        },
        [theme.breakpoints.up('xl')]: {
          width: 1824,
        },
      },
    },
    MuiTypography: {
      body1: {
        [theme.breakpoints.up('lg')]: {
          fontSize: '18px',
        },
      },
    },
  };
}

export function createOverrides(theme: Theme, overrides: TOptions = {}): TOptions {
  return merge(createDefaultOverrides(theme), overrides);
}
