import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxHeight: '100vh',
      overflow: 'auto'
    },
    experience: {
      width: 360,
      height: '100vh',
      overflowY: 'scroll',
      'scrollbar-color': '#A942E9 #171717 ',
      'scrollbar-width': 'thin !important'
    },
    user: {
      width: 320,
      marginRight: 0,
      height: '100vh',
      overflowY: 'scroll',
      'scrollbar-color': '#A942E9 #171717',
      'scrollbar-width': 'thin !important'
    },
    content: {
      width: 320,
      marginRight: 0,
      height: '100vh'
    },
    fullheight: {
      height: '100%'
    },
    grow: {
      flexGrow: 1
    },
    normal: {}
  })
);
