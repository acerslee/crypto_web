import React, { useState } from 'react'

const LoginCard = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const submitLogin = async () => {
        try {

        } catch(err) {
            console.error(err)
        }
    }

    return(
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
        </form>
    )
}

export default LoginCard
