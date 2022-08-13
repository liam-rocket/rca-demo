import { apiService } from '../services/api.service';

class AuthApi {
  async signIn({ email, password }) {
    return new Promise((resolve, reject) => {
      try {
        const user = apiService.post('/sign-in', {
          email,
          password,
        });

        resolve(user);
      } catch (err) {
        console.error('[Auth Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  async reAuth(query) {
    return new Promise((resolve, reject) => {
      try {
        const resp = apiService.get(`/re-auth`);
        resolve(resp);
      } catch (err) {
        console.error('[Auth Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  async verifySignIn(query) {
    return new Promise((resolve, reject) => {
      try {
        const resp = apiService.get(`/verify-sign-in`);
        resolve(resp);
      } catch (err) {
        console.error('[Auth Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  async logout() {
    return new Promise((resolve, reject) => {
      try {
        resolve(apiService.get('/sign-out'));
      } catch (err) {
        console.error('[Auth Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  me(data) {
    return new Promise((resolve, reject) => {
      try {
        resolve(data);
      } catch (err) {
        console.error('[Auth Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }
}

export const authApi = new AuthApi();
