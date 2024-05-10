'use client'

import React, { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Spacer } from '@nextui-org/spacer'
import { Checkbox } from '@nextui-org/checkbox'
import Link from 'next/link'
import styles from '@/app/ui/styles/auth.module.css'
import { Recover, SignIn } from '@/app/lib/api/auth'
import { useRouter } from 'next/navigation'
import { errorToast, successToast } from '@/app/utils/toasts'
import { useUserStore } from '@/app/store/user'

export default function LoginPage () {
  const router = useRouter()
  const [loadingLogin, setLoadingLogin] = useState(false)
  const [LoadingForgot, setLoadingForgot] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [forgotEmail, setForgotEmail] = useState('')
  const [error, setError] = useState(false)
  const [forgotError, setForgotError] = useState(false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const setUser = useUserStore(state => state.setUser)

  const handleLogin = () => {
    setLoadingLogin(true)
    SignIn({ email, password })
      .then((user) => {
        setUser(user)
        router.push('/')
      })
      .catch(() => {
        setLoadingLogin(false)
        setError(true)
        errorToast()
      })
  }

  const handleForgot = (close: any) => {
    setLoadingForgot(true)
    Recover({ email: forgotEmail })
      .then(() => {
        close()
        setLoadingForgot(false)
        setForgotEmail('')
        setForgotError(false)

        successToast('Recovery email has been sent successfully')
      })
      .catch(() => {
        setLoadingForgot(false)
        setForgotError(true)
        errorToast()
      })
  }

  const onEmailChange = (email: string) => {
    setEmail(email)
    setError(false)
  }

  const onPasswordChange = (password: string) => {
    setPassword(password)
    setError(false)
  }

  const onForgotEmailChange = (email: string) => {
    setForgotEmail(email)
    setForgotError(false)
  }

  return (
    <main className={styles.formContainer}>
      <h1 className={styles.title}>Login</h1>
      <Spacer y={12} />
      <Input
        isRequired
        fullWidth
        variant='bordered'
        type="email"
        label="Email"
        onValueChange={onEmailChange}
        isInvalid={error}
      />
      <Spacer y={10} />
      <Input
        isRequired
        fullWidth
        variant='bordered'
        type="password"
        label="Password"
        onValueChange={onPasswordChange}
        isInvalid={error}
      />
      <Spacer y={4} />
      <Checkbox className={styles.remember}>Remeber me</Checkbox>
      <span className={styles.forgot} onClick={onOpen} >Forgot password?</span>
      <Spacer y={20} />
      <Button
        type="submit"
        isLoading={loadingLogin}
        fullWidth
        variant="ghost"
        size="lg"
        onClick={handleLogin}
        isDisabled={error || !password || !email}
      >
        Login
      </Button>
      <Spacer y={4} />
      <p className={styles.register}>
        Don&apos;t have an account?
        <Link href="/auth/signup">Register</Link>
      </p>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement='top-center'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Forgot password</ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  value={forgotEmail}
                  type='email'
                  label="Email"
                  variant="bordered"
                  onValueChange={onForgotEmailChange}
                  isInvalid={forgotError}
                  errorMessage={forgotError ? 'Email not found' : ''}
                />
              </ModalBody>
              <ModalFooter>
                <span>* You will recieve an email with the instructions</span>
                <Button
                  variant="ghost"
                  isLoading={LoadingForgot}
                  onClick={() => handleForgot(onClose)}
                  isDisabled={forgotError || !forgotEmail}
                >
                  Send email
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  )
}
