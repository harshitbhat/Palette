import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  main: {
    backgroundColor: 'purple',
    border: '3px solid black',
    '& h1': {
      color: '#fff',
    },
  },
  secondary: {
    backgroundColor: 'pink',
  },
};

function MiniPalette(props) {
  const { classes } = props;
  console.log(classes);
  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
      <section className={classes.secondary}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est velit sunt
        porro cupiditate odit harum eligendi quam consequuntur commodi enim
        animi facilis nisi incidunt ipsa, temporibus ab distinctio ipsum quia!
      </section>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
