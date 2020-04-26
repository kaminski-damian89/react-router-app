import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <label htmlFor="log">Login: <input type="text" id="log" /> </label>
            <label htmlFor="pass">Hasło: <input type="password" id="pass" /> </label>
            <button>Zaloguj</button>
        </div>
    );
};

export default LoginPage;