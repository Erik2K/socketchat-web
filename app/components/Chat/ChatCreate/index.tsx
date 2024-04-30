import React, { useState } from 'react'
import styles from '@/app/ui/styles/chat.module.css'
import UserSearch from '../../User/UserSearch'
import { Button, Modal, ModalContent, ModalBody, ModalHeader, useDisclosure, ModalFooter } from '@nextui-org/react'
import { User } from '@/app/lib/definitions'

const ChatCreate = ({ user, newChat }: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined)

  const onOpenModal = () => {
    setSelectedUser(undefined)
    onOpen()
  }

  const onUserSelected = (user: User) => {
    setSelectedUser(user)
  }

  const handleCreateChat = () => {
    newChat(true)
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
            <Button onClick={handleCreateChat} isDisabled={!selectedUser}>
              Start chat
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ChatCreate
