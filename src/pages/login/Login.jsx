import React from "react";
import useForm from "../../hooks/useForm";
import { AuthContext } from "../../auth/AuthContext";
import styles from "./Login.module.css";

const Login = () => {
  const { userForm, handleChange, handleSubmit } = useForm(AuthContext);

  return (
    <>
      <div className={styles.logo}>SHOPY SHOP</div>
      <div className={styles.login}>
        <form onSubmit={handleSubmit}>
          <h1>INICIO SESIÓN</h1>

          <input
            placeholder="EMAIL"
            type="text"
            name="username"
            value={userForm.username}
            onChange={handleChange}
          ></input>

          <input
            placeholder="PASSWORD"
            type="password"
            name="password"
            value={userForm.password}
            onChange={handleChange}
          ></input>

          <button type="submit">INICIAR SESIÓN</button>
          <div className={styles.other}>
            <div className={styles.facebook}>CONTINUAR CON FACEBOOK</div>
            <div className={styles.google}>CONTINUAR CON GOOGLE</div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
