import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import * as authApi from '../api/authentication';

// single source of truth,
const ActionType = {
  SIGNIN: 'SIGNIN',
  LOGOUT: 'LOGOUT',
  REAUTH: 'REAUTH',
};

// declare initial state object
const initialState = {
  isAuthenticated: false,
  user: null,
  loading: true,
};

const handlers = {
  REAUTH: (state, action) => {
    const { isAuthenticated, user, loading } = action.payload;
    return {
      ...state,
      isAuthenticated,
      user,
      loading,
    };
  },
  SIGNIN: (state, action) => {
    const { user } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      user,
      loading: false,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
    loading: false,
  }),
};

/**
 * @param {Object} state - initial state
 * @param {Object} action - action type pass by dispatch
 */
const reducer = (state, action) =>
  // 1. if action.type exists, then call the handler function with the same name, else just return the current state
  // 2. we get the action.type from dispatch functions (see below)
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthContext = createContext({
  ...initialState,
  signIn: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  reAuth: () => Promise.resolve(),
});

export const AuthProvider = (props) => {
  const { children } = props;

  /**
   * https://react.dev/reference/react/useReducer
   * useReducer gives us a stricter control of what is updated
   *
   * @param {Function} reducer - the reducer function
   * @param {Object} initialState - the initial state
   */
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    reAuth();
  }, []);

  const signIn = async (email, password) => {
    const user = await authApi.signIn(email, password);
    dispatch({
      type: ActionType.SIGNIN,
      payload: {
        user: user,
        isAuthenticated: true,
      },
    });
  };

  const reAuth = () => {
    try {
      authApi.reAuth((user) => {
        if (user) {
          dispatch({
            type: ActionType.REAUTH,
            payload: {
              isAuthenticated: true,
              user,
              loading: false,
            },
          });
        } else {
          dispatch({
            type: ActionType.REAUTH,
            payload: {
              isAuthenticated: false,
              user: null,
              loading: false,
            },
          });
        }
      });
    } catch (err) {
      console.error(err);
      dispatch({
        type: ActionType.REAUTH,
        payload: {
          isAuthenticated: false,
          user: null,
          loading: false,
        },
      });
    }
  };

  const logout = async () => {
    await authApi.logOut();
    dispatch({
      type: ActionType.LOGOUT,
    });
  };

  /**
   * Integrate with useReducer - return the children prop wrapped in the provider with all of the state we want our application to have access to as the value prop.
   * As a HOC, the children will have access to whatever we pass in as the value
   * */
  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        logout,
        reAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
