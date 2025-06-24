import React, { useState } from 'react';

function LoginPage({ onLogin, loginError }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="text-center mt-4">
      <img src="/banner.png" className="img-fluid" alt="banner" />
      <h2 className="mt-2">Adopta un Robot con Robot Lovers!</h2>
      <h4 className="mt-4">Inicio de sesión</h4>
      <form className="mt-3 w-25 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre de usuario</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {loginError && <div className="text-danger mb-2">Error de autenticación. Revise sus credenciales</div>}
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Ingresar</button>
          <button type="button" className="btn btn-danger" onClick={() => { setUsername(''); setPassword(''); }}>Cancelar</button>
        </div>
      </form>
      <footer className="text-center mt-5 mb-2 text-muted">
        Contact us: +57 3102105253 – info@robot-lovers.com – @robot-lovers
      </footer>
    </div>
  );
}

export default LoginPage;

