'use server'

import { getPayload } from 'payload'
import config from '@/payload.config'

export const getPosts = async () => {
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    const posts = await payload.find({
      collection: 'posts',
      limit: 100,
      sort: '-createdAt',
    })

    return posts.docs
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message,
    }
  }
}
