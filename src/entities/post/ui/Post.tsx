import React from 'react'
import type { IPost } from '../model/post.type'

interface IProps {
  post: IPost
}

export const Post: React.FC<IProps> = ({ post }) => {
  return (
    <div className='bg-[#1f2937] block p-6 pb-2 text-white rounded-lg shadow-xs font-bold'>
      <div className='flex justify-between items-center gap-2'>
        <h3 className="font-bold text-xl break-words flex-1">{post.title}</h3>
        <div className='text-xs'>
          <span>Slug:</span>
          <p className='text-[#8d9fb8]'>{post.slug}</p>
        </div>
      </div>
      <div className="p-2">
        <div>
          <p className='text-[#8d9fb8]'>
            {post.content ? JSON.stringify(post.content) : 'No content'}
          </p>
        </div>
        <div className='w-full flex items-center justify-between text-xs mt-5 text-[#8d9fb8]'>
          Created at: 
          <span>{new Date(post.createdAt).toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}