import { useCallback, useEffect, useReducer } from 'react';
import axios from '../../../common/shared';

const templatesFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        templates: action.payload,
        isLoading: false,
        isError: false,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const useTemplates = () => {
  const [state, dispatch] = useReducer(templatesFetchReducer, {
    isLoading: false,
    isError: false,
    templates: [],
  });

  const retry = useCallback(async () => {
    dispatch({ type: 'FETCH_INIT' });
    try {
      const { data } = await axios.get('templates');
      dispatch({ type: 'FETCH_SUCCESS', payload: data.templates });
    } catch (error) {
      dispatch({ type: 'FETCH_FAILURE' });
    }
  }, []);

  useEffect(() => {
    retry();
  }, [retry]);

  return [state, retry];
};

export default useTemplates;
