/*
 *  Application Config
 */

const config = {
  env: process.env.REACT_APP_ENV || 'local',
  isBrowser: typeof window !== 'undefined',
  isServer: typeof window === 'undefined',
  defaultTimeZone: 'Asia/Hong_Kong',
  apiUrl: `http://localhost:3005`,
};

export default config;
