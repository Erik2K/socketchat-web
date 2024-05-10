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

export type SignUpRequest = {
  email: string,
  username: string,
  password: string,
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

export type CreateChatRequest = {
  users: [string]
}

export type Message = {
  _id: string
  body: string
  user: {
    _id: string
    username: string
  }
}

export type EmittedMessage = {
  body: string
  room: string
  user: {
    _id: string
    username: string
  }
}

export type ChatRoom = {
  _id: string
  room: string
  messages: Message[]
}

export type ChatPreview = {
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
  messages: Message[]
  unreaded: number
}
