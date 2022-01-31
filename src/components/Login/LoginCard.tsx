import React, { FC, useState, SyntheticEvent } from 'react'
import { useSession, signIn } from 'next-auth/react'

import axios from 'axios'
import { HeaderText } from '../../ui/Text'

const LoginCard:FC = () => {
    const { data: session } = useSession()

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
                <HeaderText>
                    Invalid username or password
                </HeaderText>
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
            {!session &&
                <div>
                    <HeaderText size={2}>
                        Or Sign in using...
                    </HeaderText>
                    <button onClick={() => signIn()} />
                </div>
            }
        </>
    )
}

export default LoginCard
