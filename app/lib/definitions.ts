// Auth

export type SignInRequest = {
  email: string,
  password: string
}

export type SignInRespose = {
  email: string,
  password: string
}

export type SignUpRequest = {
  email: string,
  username: string,
  password: string,
}

export type SignUpResponse = {
  email: string,
  username: string
}

export type RecoverRequest = {
  email: string
}

export type CheckRecoverResponse = {
  email: string
}

export type ChangePasswordRequest = {
  token: string,
  password: string
}

// Chat

export type ChatMessage = {
  username: string
  message: string
}
