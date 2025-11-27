export interface IUser {
  id: string
  name?: string
  email: string
  password?: string | null | undefined
  createdAt: string
  updatedAt: string
}
