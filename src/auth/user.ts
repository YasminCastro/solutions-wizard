import crypto from "crypto";

import { AUTH_CONFIG } from "@/config";

/**
 * User methods. The example doesn't contain a DB, but for real applications you must use a
 * db here, such as MongoDB, Fauna, SQL, etc.
 */

const users = [
  {
    id: AUTH_CONFIG.LOGIN_ID,
    createdAt: 1678484681270,
    username: AUTH_CONFIG.LOGIN_USERNAME,
    hash: AUTH_CONFIG.LOGIN_HASH,
    salt: AUTH_CONFIG.LOGIN_SALT,
  },
];

export const findUser = (username: string) => {
  const usernameLowerCased = username.toLowerCase();
  const usernameParsed = usernameLowerCased.trim();
  return users.find((user) => user.username === usernameParsed);
};

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user: any, inputPassword: any) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, "sha512")
    .toString("hex");
  const passwordsMatch = user.hash === inputHash;
  return passwordsMatch;
}
