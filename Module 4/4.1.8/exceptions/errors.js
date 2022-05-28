const errors = {
  0: 'Unknown error',
  // Internal server error
  10000: 'Internal server error',
  10001: 'Resource not found',
  10002: 'Unauthorized access',
  10003: 'Service Unavailable',
  // Permission errors
  20000: 'Unknown permission error',
  20001: 'Not authorized',
  20002: 'Invalid identity',
  // Do Not modify this error message. This is used by frontend for token expiration detection
  20003: 'Authentication token missing',
  // General errors
  30000: 'Unknown API error',
  30001: 'Record not found',
  30002: 'Invalid parameters',
  30003: 'Record already exists',
  30004: 'Required parameter is missing',
  30005: 'Invalid entity state',
  30006: 'Unable to perform actions',
  30007: 'Unable to parse data',
  30008: 'Exceed limit',
  30009: 'Being Excluded',
  30010: 'Entities not in the same group',
  30011: 'Unsupported version',
  30012: 'Invalid input data',
  30013: 'Invalid format',
  30014: 'Invalid effective date',
  30015: 'Invalid setup',
  // Domain errors
};

const Errors = Object.entries(errors).map(([code, message]) => ({
  code: Number(code),
  message,
}));

export default Errors;
