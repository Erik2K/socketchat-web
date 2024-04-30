'use client'

import React, { useState } from 'react'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Spacer } from '@nextui-org/spacer'
import Link from 'next/link'
import styles from '@/app/ui/styles/auth.module.css'
import { useRouter } from 'next/navigation'
import { SignUp } from '@/app/lib/api/auth'
import { errorToast } from '@/app/utils/toasts'

export default function RegisterPage () {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rPassword, setRPassword] = useState('')
  const [usernameError, setUsernameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [rPasswordError, setRPasswordError] = useState(false)

  const onCllickHandler = () => {
    setLoading(true)
    SignUp({ username, email, password })
      .then(() => router.push('/'))
      .catch(() => {
        setLoading(false)
        setUsernameError(true)
        setEmailError(true)
        setPasswordError(true)
        errorToast()
      })
  }

  const onUsernameChange = (username: string) => {
    setUsernameError(false)
    setUsername(username)
  }

  const onEmailChange = (email: string) => {
    setEmailError(false)
    setEmail(email)
  }

  const onPasswordChange = (password: string) => {
    setPasswordError(false)
    setPassword(password)
  }

  const onRPasswordChange = (rPassword: string) => {
    setRPasswordError(false)
    setRPassword(rPassword)

    if (password !== rPassword) setRPasswordError(true)
  }

  return (
    <div>
      <h1 className={styles.title}>Register</h1>
      <Spacer y={12} />
      <Input
        isRequired
        fullWidth
        variant='bordered'
        type="text"
        label="Username"
        onValueChange={onUsernameChange}
        isInvalid={usernameError}
      />
      <Spacer y={10} />
      <Input
        isRequired
        fullWidth
        variant='bordered'
        type="email"
        label="Email"
        onValueChange={onEmailChange}
        isInvalid={emailError}
      />
      <Spacer y={10} />
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          isRequired
          fullWidth
          variant='bordered'
          type="password"
          label="Password"
          onValueChange={onPasswordChange}
          isInvalid={passwordError}
        />
        <Input
          isRequired
          fullWidth
          variant='bordered'
          type="password"
          label="Repeat password"
          onValueChange={onRPasswordChange}
          isInvalid={rPasswordError || passwordError}
          errorMessage={rPasswordError ? 'Passwords do not match' : ''}
        />
      </div>
      <Spacer y={12} />
      <Button
        fullWidth
        variant="ghost"
        size="lg"
        onClick={onCllickHandler}
        isLoading={loading}
        isDisabled={
          usernameError ||
          emailError ||
          passwordError ||
          rPasswordError ||
          !username ||
          !email ||
          !password ||
          !rPassword
        }
      >
        Register
      </Button>
      <Spacer y={4} />
      <div className="flex justify-center">
        <p>Already have an account?</p>
        <Link className="ml-1 font-bold" href="/auth/signin">Login</Link>
      </div>
    </div>
  )
}
