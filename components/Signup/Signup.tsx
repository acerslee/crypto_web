import React, { useState } from 'react'
import axios from 'axios'
import Router from 'next/router'

interface SignupData {
    email: string
    username: string
    password: string
}

const Signup = () => {
    const [email, setEmail] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const submitSignup = async () => {
        try {
            const data: SignupData = {
                email,
                username,
                password
            }

            const response = await axios.post(data)
        } catch(err) {
            console.error(err)
        }
    }

    return(
        <form onSubmit={submitSignup}>
             <input
                type='email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                required
            />
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

export default Signup
