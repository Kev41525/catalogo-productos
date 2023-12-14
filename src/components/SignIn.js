import React from 'react';

const SignIn = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="email" placeholder="Email" />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default SignIn;