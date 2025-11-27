export interface ICategory {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  slug: string
  content?: Record<string, unknown> | null
  owner: string
  posts?: string[]
}