import { DRAWER_WIDTH } from '../constants';
import sizes from './sizes';

const drawerWidth = DRAWER_WIDTH;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  navButtons: {
    marginRight: '1rem',
    [sizes.down('sm')]: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
  },
  button: {
    margin: '0 0.5rem',
    '& a': {
      textDecoration: 'none',
      color: '#fff',
    },
    [sizes.down('sm')]: {
      padding: '2px',
      fontSize: '14px',
    },
    [sizes.down('xs')]: {
      padding: '4px',
      fontSize: '10px',
    },
  },
  navName: {
    [sizes.down('md')]: {
      display: 'none',
    },
  },
});

export default styles;
