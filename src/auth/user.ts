import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";

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

export async function createUser({ username, password }: any) {
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  const user = {
    id: uuidv4(),
    createdAt: Date.now(),
    username,
    hash,
    salt,
  };

  // This is an in memory store for users, there is no data persistence without a proper DB
  users.push(user);

  console.log(user);

  return { username, createdAt: Date.now() };
}

// Here you should lookup for the user in your DB
export async function findUser({ username }: any) {
  const usernameLowerCased = username.toLowerCase();
  const usernameParsed = usernameLowerCased.trim();
  // This is an in memory store for users, there is no data persistence without a proper DB
  return users.find((user) => user.username === usernameParsed);
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user: any, inputPassword: any) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, "sha512")
    .toString("hex");
  const passwordsMatch = user.hash === inputHash;
  return passwordsMatch;
}
