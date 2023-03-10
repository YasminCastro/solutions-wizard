import Local from "passport-local";
import { findUser, validatePassword } from "./user";

export const localStrategy = new Local.Strategy(function (
  username: any,
  password: string,
  done: any
) {
  findUser({ username })
    .then((user) => {
      if (user && validatePassword(user, password)) {
        done(null, user);
      } else {
        done(new Error("❌ Senha ou usuário inválidos."));
      }
    })
    .catch((error) => {
      done(error);
    });
});
