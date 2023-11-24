/* eslint-disable import/extensions */
import Errors from './errors.js';

class HttpException extends Error {
  constructor(status, code, params) {
    super(String(code));
    this.status = status;
    this.code = code;
    this.params = params;
    const err = Errors.find((error) => error.code === this.code);
    if (err.message) {
      this.code = code;
      this.message = err.message;
    } else {
      this.code = 0;
      this.message = 'Unknown error';
    }
  }
}

export default HttpException;
