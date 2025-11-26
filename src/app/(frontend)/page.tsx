'use client'
import React, { useState } from 'react'
import { LoginForm } from '@/widgets/LoginForm'
import { PostSection } from '@/features/PostSection'
import type { IUser } from '@/entities/user/model/user.type'
import './styles.css'

export default function Page() {
  const [user, setUser] = useState<IUser | null>(null)

  const handleSubmit = (user: IUser) => {
    setUser(user)
  }

  return user ? <PostSection user={user}/> : <LoginForm onLogin={handleSubmit} />
}
