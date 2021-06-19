import sizes from './sizes';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.4)',
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%',
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '10%',
    },
    [sizes.down('sm')]: {
      width: '100%',
      height: '5%',
      '&:hover svg': {
        transform: 'scale(1.2)',
      },
    },
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    padding: '10px',
    left: '0',
    bottom: '0',
    color: 'rgba(0, 0, 0, 0.5)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [sizes.down('sm')]: {
      padding: '2px',
      fontSize: '10px',
    },
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out',
  },
};

export default styles;
