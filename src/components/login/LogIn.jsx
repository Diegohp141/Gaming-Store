import React from "react";
import "./LogIn.css";

const LogIn = () => {
  return (
    <form className="login-form">
      <input type="email" name="email" id="email" placeholder="Email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Contraseña"
      />
      <input type="submit" value="Ingresar" className="ingresar" />
      <p className="pInput">Olvide mi Contraseña</p>
      <button className="crearCuenta">Crear Cuenta</button>
    </form>
  );
};

export default LogIn;
