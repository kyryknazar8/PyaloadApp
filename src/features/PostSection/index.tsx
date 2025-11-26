'use client'

import React from 'react'
import type { IUser } from '@/entities/user/model/user.type'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '@/server/actions/getPosts'

interface IProps {
  user: IUser
}

export const PostSection: React.FC<IProps> = ({ user }) => {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  })

  if (isLoading) return <p>Loading posts...</p>
  if (error) return <p>Error: {(error as Error).message}</p>

  return (
    <div>
      <h3>Здравствуйте, {user.email}</h3>
    </div>
  )
}
