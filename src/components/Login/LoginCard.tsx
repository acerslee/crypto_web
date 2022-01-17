import React, { useState, SyntheticEvent } from 'react'
import axios from 'axios'

const LoginCard = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isError, setError] = useState<boolean>(false)

    const submitLogin = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            const response = await axios.post('/api/login', {username, password})
        } catch(err) {
            console.error(err)
        }
    }

    return(
        <>
            {isError &&
                <h1>Invalid username or password</h1>
            }
            <form onSubmit={submitLogin}>
                <input
                    type='text'
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type='text'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default LoginCard
