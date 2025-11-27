import React from 'react'
import type { IPost } from '../model/post.type'

interface IProps {
  post: IPost
}

export const Post: React.FC<IProps> = ({ post }) => {
  return (
    <div className='bg-blue-200 block p-6 rounded-lg shadow-xs'>
      <div><span className=''>Title:</span> {post.title}</div>
      <div>Slug: {post.slug}</div>
      <div>
        <p>
          {post.content ? JSON.stringify(post.content) : 'No content'}
        </p>
      </div>
      <div>Created at: {post.createdAt}</div>
    </div>
  )
}