const styles = {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh',
  },
  logo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '20px',
    backgroundColor: '#eceff1',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: '#000',
    },
  },
  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    '& .rc-slider-track': {
      backgroundColor: 'transparent',
    },
    '& .rc-slider-rail': {
      height: '8 px',
    },
    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover':
      {
        backgroundColor: 'orange',
        outline: 'none',
        border: '2px solid orange',
        boxShadow: 'none',
        width: '13px',
        height: '13px',
        marginLeft: '-7px',
        marginTop: '-3px',
      },
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
  },
};

export default styles;
