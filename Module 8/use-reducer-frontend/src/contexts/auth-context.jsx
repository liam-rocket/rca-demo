import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { authApi } from '../api/auth-api';

// single source of truth,
const ActionType = {
  INITIALIZE: 'INITIALIZE',
  SIGNIN: 'SIGNIN',
  LOGOUT: 'LOGOUT',
  REAUTH: 'REAUTH',
};

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: {
    firstName: '',
    lastName: '',
  },
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },

  REAUTH: (state, action) => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },

  SIGNIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },

  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: {
      firstName: '',
      lastName: '',
    },
  }),
};

// if action.type exists, then call the handler function with the same name, else just return the current state
// we get the action.type from dispatch functions (see below)
const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthContext = createContext({
  ...initialState,
  signIn: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  reAuth: () => Promise.resolve(),
});

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        let { success, data } = await authApi.reAuth();
        if (success) {
          // this object that we pass into dispatch will be the action
          // the action is used in the reducer in line 64
          // depending on the action, then we will access the payload in the handler functions above (line 22)
          dispatch({
            type: ActionType.INITIALIZE,
            payload: {
              isAuthenticated: true,
              user: data,
            },
          });
        } else {
          dispatch({
            type: ActionType.INITIALIZE,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.log(err);
        if (err.code === 30018) {
          await logout();
          window.location.push('/').catch(console.error);
        }

        console.error(err);
        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const signIn = async (email, password) => {
    const user = await authApi.signIn({ email, password });

    dispatch({
      type: ActionType.INITIALIZE,
      payload: {
        user: user.data,
        isAuthenticated: true,
      },
    });
  };

  const reAuth = async (token) => {
    try {
      const { success, data } = await authApi.reAuth(token);
      if (success) {
        const user = await authApi.me(data);
        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: true,
            user,
          },
        });
      } else {
        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    } catch (err) {
      console.error(err);
      dispatch({
        type: ActionType.INITIALIZE,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  };

  const logout = async () => {
    await authApi.logout();
    dispatch({
      type: ActionType.LOGOUT,
    });
  };

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
