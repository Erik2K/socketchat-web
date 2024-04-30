import { User } from '@/app/lib/definitions'
import React from 'react'
import styles from '@/app/ui/styles/user.module.css'
import { Avatar } from '@nextui-org/react'

type ListedUserProps = {
  user: User
  selectedUser: any
  selected: boolean
}

const ListedUser = ({ user, selectedUser, selected }: ListedUserProps) => {
  const handleClick = () => {
    selectedUser(user)
  }

  return (
    <div className={selected ? styles.listedUserSelected : styles.listedUser} onClick={handleClick}>
      <div className={styles.listedUserAvatar}>
        <Avatar size='md' />
      </div>
      <div className={styles.listedUserName}>
        { user.username }
      </div>
    </div>
  )
}

export default ListedUser
