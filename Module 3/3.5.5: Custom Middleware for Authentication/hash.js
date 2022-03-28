import jsSHA from "jssha";

export const getHashedString = (input) => {
  const shaObj = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });
  shaObj.update(input);
  const hash = shaObj.getHash("HEX");
  return hash;
};

export const getHashWithSalt = (input, salt = process.env.SALT) => {
  const shaObj = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });
  const unhashedCookieString = `${input}-${salt}`;
  shaObj.update(unhashedCookieString);
  const hashedCookieString = shaObj.getHash("HEX");
  return hashedCookieString;
};
