import produce from 'immer';
import create from 'zustand';

/* create takes (set, get, api) functions to
    * set (newState => updates) to update store
    * get (() => obj) -> read store

    immer gives you a proxy on which to do imperative changes, then switches to the whole
      state : {
        field : {
          ...oldFields,
          newField : newValue,
        }
      }
*/
const createStore = config =>
  create((set, get, api) => config(fn => set(produce(fn)), get, api));

export default createStore;
