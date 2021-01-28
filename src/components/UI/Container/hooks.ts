import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      width: 576,
      paddingTop: 60,
      paddingBottom: 60,
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
}));
