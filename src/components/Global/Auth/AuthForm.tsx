import { FormLoginWrapper } from "./styles";

const AuthForm = ({ isLogin, errorMessage, onSubmit }: any) => (
  <FormLoginWrapper>
    <form onSubmit={onSubmit}>
      <label>
        <span>Usuário</span>
        <input type="text" name="username" required />
      </label>
      <label>
        <span>Senha</span>
        <input type="password" name="password" required />
      </label>

      <div className="submit">
        {isLogin ? (
          <>
            <button type="submit">Login</button>
          </>
        ) : (
          <>
            <button type="submit">Signup</button>
          </>
        )}
      </div>

      {errorMessage && <p className="error">{errorMessage}</p>}
    </form>
  </FormLoginWrapper>
);

export default AuthForm;
