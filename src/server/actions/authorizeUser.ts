'use server'
import { getPayload } from 'payload'
import config from '@/payload.config'
import type { IUser } from '@/entities/user/model/user.type'

type ILoginUser = Pick<IUser, 'email' | 'password'>

export const authorizeUser = async ({ email, password }: ILoginUser): Promise<IUser> => {
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    const user = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: email,
        },
      },
      limit: 1,
    })

    if (user.docs.length === 0) {
      throw new Error('User not found')
    }

    if (password !== 'test') {
      throw new Error('Invalid login or password')
    }

    return user.docs[0]
  } catch (error) {
    console.log(error)
    throw new Error('Invalid login or password')
  }
}
