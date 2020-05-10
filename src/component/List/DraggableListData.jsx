/* eslint-disable react/jsx-props-no-spreading */
import { Draggable } from 'react-beautiful-dnd';
import React from 'react';
import { ListData, Text } from '../styled/List';
import { Button } from '../styled/global';

const DraggableListData = ({ todo, removeTodo }) => todo.map(({ value, id }, index) => (
  <Draggable draggableId={`${id}`} index={index} key={id}>
    {(providedData) => (
      <ListData
        key={id}
        ref={providedData.innerRef}
        {...providedData.draggableProps}
        {...providedData.dragHandleProps}
      >
        <Button remove type="submit" onClick={() => removeTodo(id)}>X</Button>
        <Text>{value}</Text>
      </ListData>
    )}
  </Draggable>
));

export default DraggableListData;
