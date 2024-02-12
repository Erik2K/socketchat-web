'use client'

import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button";
import { Spacer } from "@nextui-org/spacer";
import { Checkbox } from "@nextui-org/checkbox";
import Link from "next/link";
import styles from '@/app/ui/styles/signin.module.css'
import authStyles from '@/app/ui/styles/auth.module.css'
import { useState } from "react";
import { SignIn } from "@/app/lib/api/auth/signin";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const onCllickHandler = () => {
        setLoading(true)
        SignIn({email, password})
            .then((res) => router.push('/'))
            .catch((err) => {
                console.log(err)
                setLoading(false)
                setEmailError(true)
                setPasswordError(true)
            })
    }

    const onEmailChange = (email: string) => {
        setEmail(email)
        setEmailError(false)
    }

    const onPasswordChange = (password: string) => {
        setPassword(password)
        setPasswordError(false)
    }

    return (
        <main className={styles.container}>
            <h1 className={authStyles.title}>Login</h1>
            <Spacer y={12} />
            <Input 
                isRequired
                fullWidth
                type="email" 
                label="Email"
                onValueChange={onEmailChange}
                isInvalid={emailError}
            />
            <Spacer y={10} />
            <Input 
                isRequired
                fullWidth
                type="password" 
                label="Password"
                onValueChange={onPasswordChange}
                isInvalid={passwordError}
            />
            <Spacer y={4} />
            <Checkbox className={styles.remember}>Remeber me</Checkbox>
            <Link className={styles.forgot} href="/auth/forgot">Forgot password?</Link>
            <Spacer y={20} />
            <Button
                type="submit"
                isLoading={loading}
                fullWidth 
                variant="ghost" 
                size="lg"
                onClick={onCllickHandler}
            >
                Login
            </Button>
            <Spacer y={4} />
            <p className={styles.register}>
                Don't have an account? 
                <Link href="/auth/signup">Register</Link>
            </p> 
        </main>
    )
}