const styles = {
  root: {
    backgroundColor: '#fff',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'realtive',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
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
    fontSize: '1rem',
  },
  miniColor: {
    height: '100%',
    width: '100%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px',
    '&:hover': {
      width: '300%',
    },
  },
};

export default styles;
