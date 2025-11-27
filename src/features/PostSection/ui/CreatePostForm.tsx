'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { ICreatePost } from '@/entities/post/model/post.type'
import type { IUser } from '@/entities/user/model/user.type'

interface IProps {
  onSubmit: (data: ICreatePost) => void
  user: IUser
}

export const CreatePostForm: React.FC<IProps> = ({ onSubmit, user }) => {
  const [error, setError] = useState<string | null>(null)

  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<ICreatePost>({
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
      setError(null)
      reset()              
    } catch (error) {
      console.error(error)
      setError("Заполнине все поля")
    }
  }

  return (
    <form 
      onSubmit={handleSubmit(handleFormSubmit)}
      className="p-5 bg-gray-200 max-w-[500px] m-auto rounded-lg"
    >
      <div className='py-2'>
        <h2 className='text-xl font-bold'>Создать пост</h2>
      </div>
      {error && (
        <span className='text-red-500 font-bold'>
          {error}
        </span>
      )}
      <div>
        <div><label>Title</label></div>
        <input {...register('title')} className='w-full' />
      </div>
      <div>
        <div><label>Slug</label></div>
        <input {...register('slug')} className='w-full' />
      </div>
      <div>
        <div><label>Content</label></div>
        <textarea {...register('content')} className='w-full' />
      </div>
      <button type="submit">
        {isSubmitting ? "Загрузка..." : "Создать"}
      </button>
    </form>
  )
}