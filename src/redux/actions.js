import { ADD_NEW, DELETE } from './constants';

export const addNew = (id, value) => ({
  type: ADD_NEW,
  payload: { id, value },
});

export const deleteData = (id) => ({
  type: DELETE,
  payload: id,
});
