import { ChangePasswordRequest, RecoverRequest, SignInRequest, SignUpRequest } from '../definitions'

// SignIn
export async function SignIn (request: SignInRequest) {
  const response = await fetch('/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request),
    credentials: 'include'
  })

  if (!response.ok) throw new Error('Failed to login')

  const data = await response.json()

  localStorage.setItem('user', JSON.stringify(data))

  return data
}

// SignUp
export async function SignUp (request: SignUpRequest) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request),
    credentials: 'include'
  })

  if (!response.ok) throw new Error('Failed to sign up')

  const data = await response.json()

  localStorage.setItem('user', JSON.stringify(data))

  return data
}

// Recover
export async function Recover (request: RecoverRequest) {
  const response = await fetch('/api/auth/recover', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request),
    credentials: 'include'
  })

  if (!response.ok) throw new Error('Failed to recover')

  return true
}

// Check Recover
export async function CheckRecover (token: string) {
  const response = await fetch(`/api/auth/recover/${token}`)

  if (!response.ok) throw new Error('Failed to check recover')

  const data = await response.json()

  return data
}

// Change Password
export async function ChangePassword (request: ChangePasswordRequest) {
  const response = await fetch('/api/auth/recover', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request),
    credentials: 'include'
  })

  if (!response.ok) throw new Error('Failed to update password')

  return true
}
