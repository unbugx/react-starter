import { makeStyles } from '@material-ui/core/styles';

// FIXME Grid doesn't support custom breakpoints so let's support them in such way
// https://github.com/mui-org/material-ui/issues/21589
export const useStyles = makeStyles((theme) => ({
  item: {
    [theme.breakpoints.between('xm', 'md')]: {
      flexGrow: 0,
      maxWidth: '50%',
      flexBasis: '50%',
    },
  },
}));
