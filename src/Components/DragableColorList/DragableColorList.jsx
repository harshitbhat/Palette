import React from 'react';
import DragableColorBox from '../DragableColorBox/DragableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

const DragableColorList = SortableContainer(({ colors, removeColor }) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexDirection: 'flex-start',
        alignContent: 'flex-start',
      }}
    >
      {colors.map((color, idx) => (
        <DragableColorBox
          index={idx}
          key={color.name}
          color={color.color}
          name={color.name}
          handleDeleteColor={() => removeColor(color.name)}
        />
      ))}
    </div>
  );
});

export default DragableColorList;
