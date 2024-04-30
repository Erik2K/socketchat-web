import React, { useState } from 'react'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Spacer } from '@nextui-org/spacer'
import styles from '@/app/ui/styles/chat.module.css'

const ChatAction = ({ sendMessage, user }: any) => {
  const [message, setMessage] = useState('')

  const onMessageChange = (message: string) => {
    setMessage(message)
  }

  const onclickHandler = () => {
    sendMessage({
      username: user?.username,
      message
    })

    setMessage('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onclickHandler()
    }
  }

  return (
    <div className={styles.chatAction}>
      <Input
          type="text"
          fullWidth
          value={message}
          onValueChange={onMessageChange}
          onKeyDown={handleKeyDown}
        />
        <Spacer x={5} />
        <Button
          variant="ghost"
          size="lg"
          onClick={onclickHandler}
        >
          Send
        </Button>
    </div>
  )
}

export default ChatAction
