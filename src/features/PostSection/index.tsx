'use client'

import React from 'react'
import type { IUser } from '@/entities/user/model/user.type'
import type { IPost, ICreatePost } from '@/entities/post/model/post.type'
import { Post } from '@/entities/post/ui/Post'
import { getPosts } from '@/server/actions/getPosts'
import { CreatePostForm } from './ui/CreatePostForm'
import { createPost } from '@/server/actions/createPost'
import { useQuery, useQueryClient } from '@tanstack/react-query'

interface IProps {
  user: IUser
}

export const PostSection: React.FC<IProps> = ({ user }) => {
  const queryClient = useQueryClient()

  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  })

  const handleSubmitCreatePostForm = async (post: ICreatePost) => {
    try {
      const newPost = await createPost(post)
      await queryClient.invalidateQueries({ queryKey: ['posts'] })
      console.log(newPost)
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoading) return <p>Загрузка постів...</p>
  if (error) return <p>Помилка: {(error as Error).message}</p>

  return (
    <div>
      <div className='p-5 font-bold'>
        <h2>Здравствуйте, {user.email}</h2>
      </div>
      <CreatePostForm onSubmit={handleSubmitCreatePostForm} user={user}/>
      <div className='mt-2 grid grid-cols-1 w-full gap-2 md:grid-cols-2'>
        {posts?.length === 0 && (<span>Поки немає постів</span>)}
        {posts?.map((post: IPost, index: number) => (
          <Post key={post.id + index} post={post}/>
        ))}
      </div>
    </div>
  )
}
