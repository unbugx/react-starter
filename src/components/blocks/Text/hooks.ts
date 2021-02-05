import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  wrap: {
    maxWidth: 768,
    margin: '0 auto',
  },
  imageWrap: {
    position: 'relative',
    boxSizing: 'border-box',
    width: '100%',
    padding: '30% 50%',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  text: {
    padding: `${theme.spacing(2)}px 0`,
  },
  actions: {
    padding: `${theme.spacing(2)}px 0`,
  },
}));
