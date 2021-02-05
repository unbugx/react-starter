import { Theme, ThemeOptions } from '@material-ui/core/styles';
import merge from 'deepmerge';

type TOptions = NonNullable<ThemeOptions['overrides']>;

export function createDefaultOverrides(theme: Theme): TOptions {
  return {
    MuiButton: {
      root: {
        background: (props) => {
          const { color = 'primary' } = props as { color: 'primary' | 'secondary' };
          return theme.palette[color][theme.palette.type];
        },
        borderRadius: 21,
        textTransform: 'capitalize',
      },
      containedSizeSmall: {
        padding: '4px 20px',
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: theme.palette.backgroundPrimary[theme.palette.type],
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
