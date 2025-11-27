import React from 'react'
import type { IPost } from '../model/post.type'

interface IProps {
  post: IPost
}

export const Post: React.FC<IProps> = ({ post }) => {
  return (
    <div style={{ padding: '5px', border: '1px solid #000' }}>
      <div>Title: {post.title}</div>
      <div>Slug: {post.slug}</div>
      <div>Content: {post.content ? JSON.stringify(post.content) : 'No content'}</div>
      <div>Created at: {post.createdAt}</div>
    </div>
  )
}