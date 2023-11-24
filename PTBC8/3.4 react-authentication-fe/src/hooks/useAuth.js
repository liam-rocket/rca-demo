import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

// we only need to call useContext once throughout the codebase
export const useAuth = () => useContext(AuthContext);

/**
 * 
 * 
    <AuthContext.Provider
      value={{
        ...state,
        signIn,    <- useContext(AuthContext) will return this object
        logout,
        reAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
 * 
 * 
 */
