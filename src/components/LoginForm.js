import { useState } from "react";
import axios from 'axios';

const PROJECT_ID = '167f134d-8015-4b1b-8a63-4af822df37a5';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const authObject = { 
            'Project-ID': PROJECT_ID,
            'User-Name': username,
            'User-Secret': password
        };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
            setError('');

        } catch(error) {
            setError('Incorrect credentials');
        }
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                    type='text' 
                    value={username}
                    onChange={ (event) => setUsername(event.target.value) }
                    className='input'
                    placeholder='Username'
                    required
                    />
                    <input 
                    type='password' 
                    value={password}
                    onChange={ (event) => setPassword(event.target.value) }
                    className='input'
                    placeholder='Password'
                    required
                    />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Log In</span>
                        </button>
                    </div>
                </form>
                <h2 className='error'>{error}</h2>
            </div>
        </div>
    )
}

export default LoginForm;