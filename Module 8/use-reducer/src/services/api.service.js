import 'isomorphic-fetch';
import config from '../configs';
import { stringify } from 'qs';
import { omit, merge, toUpper } from 'lodash';

class ApiService {
  constructor(url) {
    this.apiUrl = url;
    this.apiToken = '';
    this.options = {};
  }

  setToken(apiToken) {
    this.apiToken = apiToken;

    this.options.headers = {
      ...this.options.headers,
      Authorization: `Bearer ${apiToken}`,
    };
  }

  unsetToken() {
    this.options.headers = {
      ...this.options.headers,
      Authorization: undefined,
    };
  }

  parseOptions({ method = 'get', data, locale, ...options }) {
    // If request is multipart, adjust content type
    const isMultipart = options.contentType === 'multipart/form-data';

    const settings = merge(
      {
        body: data ? JSON.stringify(data) : undefined,
        method: toUpper(method),
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
      },
      options
    );

    if (isMultipart) {
      settings.body = data;
      settings.headers = omit(settings.headers, ['Content-Type']);
    }

    return settings;
  }

  parseEndpoint(endpoint, queryParams) {
    const url =
      endpoint.indexOf('http') === 0 ? endpoint : `${this.apiUrl}${endpoint}`;
    const queryString = queryParams ? `?${stringify(queryParams)}` : '';
    return `${url}${queryString}`;
  }

  convertToJson(response) {
    try {
      const result = response.json();
      return result;
    } catch (jsonError) {
      let errorMessage;
      if (jsonError.message && jsonError.description) {
        errorMessage = `${jsonError.message}, ${jsonError.description}.`;
      } else if (jsonError.message) {
        errorMessage = `${jsonError.message}`;
      } else {
        errorMessage = `${response.status} ${response.statusText}`;
      }
      const error = new Error(errorMessage);
      throw error;
    }
  }

  checkStatus(response) {
    return new Promise((resolve, reject) => {
      if (response.ok) return resolve(response);

      response
        .json()
        .then((jsonError) => {
          let errorMessage;
          if (jsonError.message && jsonError.description) {
            errorMessage = `${jsonError.message}, ${jsonError.description}.`;
          } else if (jsonError.message) {
            errorMessage = `${jsonError.message}`;
          } else {
            errorMessage = `${response.status} ${response.statusText}`;
          }
          jsonError.message = errorMessage;
          reject(jsonError);
        })
        .catch(() => {
          const error = new Error(`${response.status} ${response.statusText}`);
          reject(error);
        });
    });
  }

  async request(endpointUrl, options = {}) {
    return fetch(endpointUrl, {
      ...options,
      credentials: 'include', // required for httpOnly cookie
    })
      .then(this.checkStatus)
      .then(this.convertToJson);
  }

  async get(endpoint, queryParams, options) {
    const url = this.parseEndpoint(endpoint, queryParams);
    const parsedOptions = this.parseOptions({
      method: 'get',
      ...options,
    });
    return this.request(url, parsedOptions);
  }

  async post(endpoint, data, options) {
    const url = this.parseEndpoint(endpoint);
    const parsedOptions = this.parseOptions({
      method: 'post',
      data,
      ...options,
    });
    return this.request(url, parsedOptions);
  }

  async put(endpoint, data, options) {
    const url = this.parseEndpoint(endpoint);
    const parsedOptions = this.parseOptions({
      method: 'put',
      data,
      ...options,
    });
    return this.request(url, parsedOptions);
  }

  async patch(endpoint, data, options) {
    const url = this.parseEndpoint(endpoint);
    const parsedOptions = this.parseOptions({
      method: 'patch',
      data,
      ...options,
    });
    return this.request(url, parsedOptions);
  }

  async delete(endpoint, data, options) {
    const url = this.parseEndpoint(endpoint);
    const parsedOptions = this.parseOptions({
      method: 'delete',
      data,
      ...options,
    });
    return this.request(url, parsedOptions);
  }

  async download(endpoint, options) {
    const url = this.parseEndpoint(endpoint);
    window.open(url, '_blank');

    const parsedOptions = this.parseOptions({
      method: 'get',
      ...options,
    });
    return this.request(url, parsedOptions);
  }
}

export const apiService = new ApiService(config.apiUrl);

export default ApiService;
