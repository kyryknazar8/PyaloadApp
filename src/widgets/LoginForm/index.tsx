'use client'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { authorizeUser } from '@/server/actions/authorizeUser'
import type { IUser } from '@/entities/user/model/user.type'

type Inputs = {
  email: string
  password: string
}

interface IProps {
  onLogin: (user: IUser) => void
}

export const LoginForm: React.FC<IProps> = ({ onLogin }) => {
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const user = await authorizeUser(data)
      
      if (user) onLogin(user)
    } catch (error) {
      setError('Invalid login or password')
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && <span style={{ color: 'red' }}>{error}</span>}
      <div>
        <input {...register('email')} placeholder="Email" />
      </div>
      <div>
        <input {...register('password', { required: true })} placeholder="Password" />
      </div>
      <button type="submit" disabled={isSubmitting}>
        Войти
      </button>
    </form>
  )
}
