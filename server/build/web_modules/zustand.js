import './common/_commonjsHelpers-37fa8da4.js';
import { r as react } from './common/index-8732a38f.js';

function create(createState) {
  let state;
  const listeners = new Set();

  const setState = (partial, replace) => {
    const nextState = typeof partial === 'function' ? partial(state) : partial;

    if (nextState !== state) {
      const previousState = state;
      state = replace ? nextState : Object.assign({}, state, nextState);
      listeners.forEach(listener => listener(state, previousState));
    }
  };

  const getState = () => state;

  const subscribeWithSelector = (listener, selector = getState, equalityFn = Object.is) => {
    let currentSlice = selector(state);

    function listenerToAdd() {
      const nextSlice = selector(state);

      if (!equalityFn(currentSlice, nextSlice)) {
        const previousSlice = currentSlice;
        listener(currentSlice = nextSlice, previousSlice);
      }
    }

    listeners.add(listenerToAdd); // Unsubscribe

    return () => listeners.delete(listenerToAdd);
  };

  const subscribe = (listener, selector, equalityFn) => {
    if (selector || equalityFn) {
      return subscribeWithSelector(listener, selector, equalityFn);
    }

    listeners.add(listener); // Unsubscribe

    return () => listeners.delete(listener);
  };

  const destroy = () => listeners.clear();

  const api = {
    setState,
    getState,
    subscribe,
    destroy
  };
  state = createState(setState, getState, api);
  return api;
}

const useIsoLayoutEffect = typeof window === 'undefined' ? react.useEffect : react.useLayoutEffect;
function create$1(createState) {
  const api = typeof createState === 'function' ? create(createState) : createState;

  const useStore = (selector = api.getState, equalityFn = Object.is) => {
    const [, forceUpdate] = react.useReducer(c => c + 1, 0);
    const state = api.getState();
    const stateRef = react.useRef(state);
    const selectorRef = react.useRef(selector);
    const equalityFnRef = react.useRef(equalityFn);
    const erroredRef = react.useRef(false);
    const currentSliceRef = react.useRef();

    if (currentSliceRef.current === undefined) {
      currentSliceRef.current = selector(state);
    }

    let newStateSlice;
    let hasNewStateSlice = false; // The selector or equalityFn need to be called during the render phase if
    // they change. We also want legitimate errors to be visible so we re-run
    // them if they errored in the subscriber.

    if (stateRef.current !== state || selectorRef.current !== selector || equalityFnRef.current !== equalityFn || erroredRef.current) {
      // Using local variables to avoid mutations in the render phase.
      newStateSlice = selector(state);
      hasNewStateSlice = !equalityFn(currentSliceRef.current, newStateSlice);
    } // Syncing changes in useEffect.


    useIsoLayoutEffect(() => {
      if (hasNewStateSlice) {
        currentSliceRef.current = newStateSlice;
      }

      stateRef.current = state;
      selectorRef.current = selector;
      equalityFnRef.current = equalityFn;
      erroredRef.current = false;
    });
    const stateBeforeSubscriptionRef = react.useRef(state);
    useIsoLayoutEffect(() => {
      const listener = () => {
        try {
          const nextState = api.getState();
          const nextStateSlice = selectorRef.current(nextState);

          if (!equalityFnRef.current(currentSliceRef.current, nextStateSlice)) {
            stateRef.current = nextState;
            currentSliceRef.current = nextStateSlice;
            forceUpdate();
          }
        } catch (error) {
          erroredRef.current = true;
          forceUpdate();
        }
      };

      const unsubscribe = api.subscribe(listener);

      if (api.getState() !== stateBeforeSubscriptionRef.current) {
        listener(); // state has changed before subscription
      }

      return unsubscribe;
    }, []);
    return hasNewStateSlice ? newStateSlice : currentSliceRef.current;
  };

  Object.assign(useStore, api); // For backward compatibility (No TS types for this)

  useStore[Symbol.iterator] = function* () {
    console.warn('[useStore, api] = create() is deprecated and will be removed in v4');
    yield useStore;
    yield api;
  };

  return useStore;
}

export default create$1;
