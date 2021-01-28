import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.blockBackground[theme.palette.type],
  },
}));
