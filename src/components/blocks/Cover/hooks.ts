import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  wrap: {
    minHeight: '50vh',
  },
  imageWrap: {
    alignSelf: 'stretch',
    position: 'relative',
    width: '100%',
    padding: '30% 50%',
    [theme.breakpoints.up('md')]: {
      padding: '25% 25%',
    },
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      paddingTop: theme.spacing(10),
    },
  },
}));
