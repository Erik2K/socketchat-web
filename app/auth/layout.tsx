import React from 'react'
import styles from '@/app/ui/styles/auth.module.css'

export default function AuthLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
