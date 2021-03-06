import chroma from 'chroma-js';
import sizes from './sizes';

const styles = {
  ColorBox: {
    height: (props) => (props.showingFullPalette ? '25%' : '50%'),
    width: '20%',
    margin: '0',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    '&:hover button': {
      opacity: '1',
      transition: '0.5s',
    },
    [sizes.down('lg')]: {
      width: (props) => (props.showingFullPalette ? '25%' : '20%'), // 25%
      height: (props) => (props.showingFullPalette ? '20%' : '50%'),
    },
    [sizes.down('md')]: {
      width: (props) => (props.showingFullPalette ? '50%' : '20%'), //'50%',
      height: (props) => (props.showingFullPalette ? '10%' : '50%'),
    },
    [sizes.down('sm')]: {
      width: (props) => (props.showingFullPalette ? '100%' : '100%'), //'100%',
      height: (props) => (props.showingFullPalette ? '5%' : '10%'),
    },
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.5)' : 'white',
  },
  colorName: {
    color: (props) => {
      if (chroma(props.background).luminance() <= 0.08) {
        return '#fff';
      } else {
        return 'rgba(0,0,0,0.5)';
      }
    },
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.5)' : 'white',
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0',
    bottom: '0',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase',
    fontSize: '12px',
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.5)' : 'white',
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    textTransform: 'uppercase',
    border: 'none',
    textDecoration: 'none',
    opacity: '0',
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    marginLeft: '0.2rem',
    left: '0',
    bottom: '0',
    padding: '5px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.1)',
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute',
  },
  copyMessage: {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '3rem',
    transform: 'scale(0.1)',
    opacity: '0',
    color: '#fff',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px #000',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      textTransform: 'uppercase',
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '100',
    },
  },
  showMessage: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '25',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s',
  },
};

export default styles;
