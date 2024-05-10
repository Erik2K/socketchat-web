import React, { useState } from 'react'
import ListedUser from '../ListedUser'
import { User } from '@/app/lib/definitions'
import { ScrollShadow, Spacer, Spinner } from '@nextui-org/react'
import styles from '@/app/ui/styles/user.module.css'

type UserListProps = {
  users: User[]
  loading: boolean
  selectedUser: any
}

const UserList = ({ users, loading, selectedUser }: UserListProps) => {
  const [userSelected, setUserSelected] = useState<User | undefined>(undefined)

  const onUserSelected = (user: User) => {
    setUserSelected(user)
    selectedUser(user)
  }

  return (
    <ScrollShadow hideScrollBar className={styles.userList}>
      <Spacer y={10} />
      {
        loading
          ? <div className={styles.userListLoading}>
              <Spinner size='lg' className={styles.userListSpinner} />
            </div>

          : <div>
              {
                users.map(user => {
                  return (
                    <div key={user._id}>
                      <ListedUser user={user} selectedUser={onUserSelected} selected={user === userSelected} />
                      <Spacer y={3} />
                    </div>
                  )
                })
              }
            </div>
      }
    </ScrollShadow>
  )
}

export default UserList
