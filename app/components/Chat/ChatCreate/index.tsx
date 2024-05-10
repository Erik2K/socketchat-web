import React, { useState } from 'react'
import styles from '@/app/ui/styles/chat.module.css'
import UserSearch from '../../User/UserSearch'
import { Button, Modal, ModalContent, ModalBody, ModalHeader, useDisclosure, ModalFooter } from '@nextui-org/react'
import { User } from '@/app/lib/definitions'
import { CreateChat } from '@/app/lib/api/chat'
import { errorToast } from '@/app/utils/toasts'
import { useChatPreviewStore } from '@/app/store/chatPreviews'
import { useChatStore } from '@/app/store/chat'

const ChatCreate = () => {
  const fetchChatPreviews = useChatPreviewStore(state => state.fetchChatPreviews)
  const setCurrentChat = useChatStore(state => state.setCurrentChat)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined)
  const [loading, setLoading] = useState(false)

  const onOpenModal = () => {
    setSelectedUser(undefined)
    onOpen()
  }

  const onUserSelected = (user: User) => {
    setSelectedUser(user)
  }

  const handleCreateChat = () => {
    setLoading(true)
    CreateChat({ users: [selectedUser!.email] })
      .then(chat => {
        if (chat) {
          onOpenChange()
          setCurrentChat(chat._id)
          fetchChatPreviews()
          setLoading(false)
        }
      })
      .catch(() => {
        setLoading(false)
        errorToast()
      })
  }

  return (
    <>
      <div className={styles.chatCreate}>
        <Button
          isIconOnly
          onPress={onOpenModal}
          className={styles.chatCreateButton}
        >
          +
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement='top'
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Search User</ModalHeader>
          <ModalBody>
            <UserSearch selectedUser={onUserSelected} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleCreateChat} isDisabled={!selectedUser} isLoading={loading}>
              Start chat
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ChatCreate
