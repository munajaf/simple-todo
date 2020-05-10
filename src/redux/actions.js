import { ADD_NEW, DELETE, REORDER } from './constants';

const reorder = (todo, { source, destination }) => {
  const result = Array.from(todo);
  const [removed] = result.splice(source.index, 1);
  result.splice(destination.in, 0, removed);
  return result;
};

export const addNew = (id, value) => ({
  type: ADD_NEW,
  payload: { id, value },
});

export const deleteData = (id) => ({
  type: DELETE,
  payload: id,
});

export const reorderData = (todo, value) => (dispatch) => {
  dispatch({
    type: REORDER,
    payload: reorder(todo, value),
  });
};
