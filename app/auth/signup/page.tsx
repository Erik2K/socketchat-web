import React from 'react'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Spacer } from '@nextui-org/spacer'
import Link from 'next/link'
import authStyles from '@/app/ui/styles/auth.module.css'

export default function RegisterPage () {
  return (
    <div>
      <h1 className={authStyles.title}>Register</h1>
      <Spacer y={12} />
      <Input
        isRequired
        fullWidth
        type="text"
        label="Username"
      />
      <Spacer y={10} />
      <Input
        isRequired
        fullWidth
        type="email"
        label="Email"
      />
      <Spacer y={10} />
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          isRequired
          fullWidth
          type="password"
          label="Password"
        />
        <Input
          isRequired
          fullWidth
          type="password"
          label="Repeat password"
        />
      </div>
      <Spacer y={12} />
      <Button fullWidth variant="ghost" size="lg">Register</Button>
      <Spacer y={4} />
      <div className="flex justify-center">
        <p>Already have an account?</p>
        <Link className="ml-1 font-bold" href="/auth/signin">Login</Link>
      </div>
    </div>
  )
}
