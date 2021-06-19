import sizes from './sizes';

const styles = {
  root: {
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflowY: 'scroll',
  },
  container: {
    width: '60%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.down('lg')]: {
      width: '80%',
    },
    [sizes.down('md')]: {
      width: '95%',
    },
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    '& a': {
      color: '#fff',
      textDecoration: 'none',
      padding: '10px',
      border: '1px solid white',
    },
    '& a:hover': {
      color: 'blue',
      backgroundColor: '#fff',
    },
  },
  palette: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 45%)',
      gridGap: '10%',
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
    },
  },
};

export default styles;
