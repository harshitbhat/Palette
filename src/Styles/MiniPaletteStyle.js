import sizes from './sizes';

const styles = {
  root: {
    backgroundColor: 'rgba(243, 240, 247, 0.4)',
    boxShadow: '0 10px 10px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: '1',
    },
  },
  color: {
    backgroundColor: '#dae1e4',
    height: '50px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: '#000',
    fontSize: '1rem',
    position: 'relative',
  },
  emoji: {
    fontSize: '1.2rem',
    marginRight: '0.25rem',
  },
  miniColor: {
    height: '100%',
    width: '100%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    '&:hover': {
      width: '300%',
    },
  },
  deleteIcon: {
    height: '40%',
    width: '12%',
    color: '#fff',
    backgroundColor: '#eb3d30',
    position: 'absolute',
    bottom: '0px',
    right: '0px',
    zIndex: '10',
    opacity: '0',
    transition: 'all 0.5s ease-in-out',
  },
};

export default styles;
