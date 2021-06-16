import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../../Styles/PaletteFooterStyle.js';

function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.PaletterFooter}>
      {paletteName} <span className={classes.emoji}>{emoji}</span>{' '}
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);
