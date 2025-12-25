import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext)
    const handelSubmit = (e) => {
        e.preventDefault();
        setUser({ userName, password })
        // alert('Login Successful')
    }
    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder='Username' onChange={(e) => setUserName(e?.target.value)} />
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e?.target.value)} />
            <button onClick={handelSubmit}>Submit</button>
        </div>
    )
}

export default Login