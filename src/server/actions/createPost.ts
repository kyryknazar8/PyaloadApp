"use server"
import { getPayload } from 'payload';
import config from '@/payload.config';
import type { ICreatePost } from '@/entities/post/model/post.type';

export async function createPost({ title, slug, content, owner }: ICreatePost) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  
  const post = await payload.create({
    collection: 'posts',
    data: {
      title,
      slug,
      content,
      owner
    },
  });

  return post
}