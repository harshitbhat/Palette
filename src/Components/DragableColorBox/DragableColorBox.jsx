import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import styles from '../../Styles/DragableColorBoxStyle';

const DragableColorBox = SortableElement((props) => {
  const { classes, color, name, handleDeleteColor } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={handleDeleteColor}
        />
      </div>
    </div>
  );
});

export default withStyles(styles)(DragableColorBox);
