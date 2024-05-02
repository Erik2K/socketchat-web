export type User = {
  _id: string
  email: string
  username: string
}

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

export type GetChatResponse = {
  _id: string
  messages: [
    {
      _id: string
      body: string
      user: {
        _id: string
        username: string
      }
    }
  ]
}

export type CreateChatRequest = {
  users: [string]
}

export type ChatRoom = {
  _id: string
  room: {
    _id: string
    users: [
      {
        _id: string
        username: string
      }
    ]
  },
  messages: [
    {
      _id: string
      body: string
      user: string
    }
  ]
}

export type Message = {
  room: string
  message: string
  username: string
}
