'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import type { ICreatePost } from '@/entities/post/model/post.type'
import type { IUser } from '@/entities/user/model/user.type'

interface IProps {
  onSubmit: (data: ICreatePost) => void
  user: IUser
}

export const CreatePostForm: React.FC<IProps> = ({ onSubmit, user }) => {
  const { register, handleSubmit, reset } = useForm<ICreatePost>({
    defaultValues: {
      title: '',
      slug: '',
      categories: [],
      content: '',
      owner: user.id,
    },
  })

  const handleFormSubmit = async (data: ICreatePost) => {
    try {
      onSubmit(data)
      reset()              
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <div><label>Title</label></div>
        <input {...register('title')} />
      </div>
      <div>
        <div><label>Slug</label></div>
        <input {...register('slug')} />
      </div>
      {/* <div>
        <label>Categories (IDs comma separated)</label>
        <input
          {...register('categories', {
            setValueAs: (v) => v.split(',').map((s: ICategory) => s),
          })}
        />
      </div> */}
      <div>
        <div><label>Content</label></div>
        <textarea {...register('content')} />
      </div>
      <button type="submit">Створити</button>
    </form>
  )
}