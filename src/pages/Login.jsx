import { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Lógica para processar o login
    console.log('Realizando login...');
    console.log('Usuário:', username);
    console.log('Senha:', password);
  };

  const handleRegister = () => {
    // Lógica para registrar um novo usuário
    console.log('Realizando registro...');
    console.log('Usuário:', username);
    console.log('Senha:', password);
  };

  return (
    <div className='container '>
      <h1>Login</h1>
      <div className='loginInput'>
        <label htmlFor="username">Usuário:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className='loginInput'>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className='buttonInput'>
        <Link to='/'>
          <button onClick={handleLogin}>Login</button>
        </Link>
        <button onClick={handleRegister}>Cadastrar</button>
      </div>
    </div>
  );
};

export default Login;
