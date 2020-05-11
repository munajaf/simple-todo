import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { reorderData } from '../redux/actions';
import DraggableListData from './List/DraggableListData';
import { UnorderedList } from './styled/List';

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
      <Droppable droppableId="list">
        {(provided, { isDraggingOver }) => (
          <UnorderedList ready={todo.length} isDraggingOver={isDraggingOver}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <DraggableListData todo={todo} removeTodo={removeTodo} />
              {provided.placeholder}
            </div>
          </UnorderedList>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default List;
