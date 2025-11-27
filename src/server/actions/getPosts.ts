'use server'

import { getPayload } from 'payload'
import config from '@/payload.config'
import type { IPost } from '@/entities/post/model/post.type'

export const getPosts = async (): Promise<IPost[]> => {
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    const posts = await payload.find({
      collection: 'posts',
      limit: 100,
      sort: '-createdAt',
    })

    return posts.docs as unknown as IPost[]
  } catch (error) {
    console.log(error)
    throw new Error("Не вдалось отримати пости")
  }
}
