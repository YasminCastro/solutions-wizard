import styled from "styled-components";
import { colors } from "@/styles/GlobalStyles";

export const HeaderLoginWrapper = styled.header`
  color: #fff;
  background-color: black;

  padding: 10px;
  height: 30px;

  nav {
    margin: 0 auto;
    padding: 4px 150px;
  }

  ul {
    display: flex;
    justify-content: flex-end;
  }

  li {
    margin-left: 24px;
  }

  a {
    color: #fff;
  }

  p {
    color: #fff;
  }
`;

export const FormLoginWrapper = styled.div`
  max-width: 500px;

  margin: 0 auto;

  form {
    margin: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    padding: 40px;
  }

  form,
  label {
    display: flex;
    flex-flow: column;
  }

  span {
    font-weight: 600;
  }

  input {
    margin: 10px 0 18px;

    box-sizing: border-box;
    font-size: 18px;
    font-weight: 400;
    padding: 10px;
    color: grey;
    background: #edf1f3;

    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }

  button {
    cursor: pointer;
    padding: 10px;
    font-size: 16px;
    font-weight: 400;

    color: ${colors.purple1000};
    background: #fff;

    border-radius: 5px;
    border: 1px solid ${colors.purple1000};

    :hover {
      background: ${colors.purple1000};
      color: #fff;
    }
  }

  .error {
    font-weight: 600;
    color: red;
    margin: 24px 0 0;
  }
`;
