import React, { useState, SyntheticEvent } from 'react'
import axios from 'axios'
import Router from 'next/router'

interface SignupData {
    email: string
    username: string
    password: string
}

const SignupForm: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const submitSignup = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            const data: SignupData = {
                email,
                username,
                password
            }

            const response = await axios.post('/api/submitSignup', data)

            //if successful, re route user to the home page
        } catch(err: any) {
            console.error(err)
            setErrorMessage(err)
        } finally {
            setIsLoading(false)
        }
    }

    return(
        <>
            {setErrorMessage.length > 0 && <p>{errorMessage}</p>}
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
                <button
                    type="submit"
                    disabled={password.length < 6 || isLoading}>
                        Submit
                </button>
            </form>
        </>
    )
}

export default SignupForm
