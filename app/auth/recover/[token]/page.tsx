'use client'

import React, { useState, useEffect } from 'react'
import { ChangePassword, CheckRecover } from '@/app/lib/api/auth'
import { notFound, useRouter } from 'next/navigation'
import { CheckRecoverResponse } from '@/app/lib/definitions'
import styles from '@/app/ui/styles/auth.module.css'
import { Spacer, Input, Button } from '@nextui-org/react'
import { errorToast, successToast } from '@/app/utils/toasts'

export default function RecoverPage ({ params }: {params: { token: string }}) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [notFoundError, setNotFoundError] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rPassword, setRPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [rPasswordError, setRPasswordError] = useState(false)

  // TODO: use SWR
  useEffect(() => {
    CheckRecover(params.token)
      .then((res: CheckRecoverResponse) => {
        setEmail(res.email)
      })
      .catch(() => {
        setNotFoundError(true)
      })
  })

  if (notFoundError) return notFound()

  const onPasswordChange = (password: string) => {
    setPassword(password)
    setPasswordError(false)
  }

  const onRPasswordChange = (rPassword: string) => {
    setRPassword(rPassword)
    setRPasswordError(false)

    if (password !== rPassword) setRPasswordError(true)
  }

  const onClickHandler = () => {
    setLoading(true)
    ChangePassword({ token: params.token, password })
      .then(() => {
        router.push('/')
        successToast('Password has been changed successfully')
      })
      .catch(() => {
        setLoading(false)
        setPasswordError(true)
        setRPasswordError(true)
        errorToast()
      })
  }

  return (
    <div>
      <h1 className={styles.title}>Recover</h1>
      <Spacer y={12} />
      <Input
        isRequired
        fullWidth
        value={email}
        variant='bordered'
        type="email"
        label="Email"
        isDisabled={true}
      />
      <Spacer y={10} />
      <Input
        isRequired
        fullWidth
        variant='bordered'
        type="password"
        label="Password"
        onValueChange={onPasswordChange}
        isInvalid={passwordError}
      />
      <Spacer y={10} />
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
      <Spacer y={12} />
      <Button
        fullWidth
        variant="ghost"
        size="lg"
        onClick={onClickHandler}
        isLoading={loading}
        isDisabled={
          passwordError ||
          rPasswordError ||
          !password ||
          !rPassword
        }
      >
        Change password
      </Button>
    </div>
  )
}
