import { combineReducers } from 'redux';
import { ADD_NEW, DELETE, REORDER } from './constants';

const INIT_STATE = {
  todo: [],
};

const addNewData = (state, payload) => ({
  ...state,
  todo: [...state.todo, payload],
});

const deleteData = (state, payload) => ({
  ...state,
  todo: state.todo.filter(({ id }) => id !== payload),
});

const newReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case ADD_NEW:
      return addNewData(state, payload);
    case DELETE:
      return deleteData(state, payload);
    case REORDER:
      return { todo: payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  newReducer,
});

export default rootReducer;
