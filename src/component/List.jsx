import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { reorderData } from '../redux/actions';
import DraggableListData from './List/DraggableListData';

const List = ({ todo, removeTodo }) => {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    if (!result.destination || result.destination.index === result.source.index) {
      return;
    }
    dispatch(reorderData(todo, result));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ul>
        <Droppable droppableId="list">
          {(provided) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <DraggableListData todo={todo} removeTodo={removeTodo} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </ul>
    </DragDropContext>
  );
};


export default List;
