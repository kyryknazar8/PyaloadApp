import type { ICategory } from "@/entities/category/model/category.type"
import type { IUser } from "@/entities/user/model/user.type"

export interface IPost {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  slug: string
  categories?: (string | ICategory | null)[] | null
  content?: Record<string, unknown> | null
  owner: string | IUser
}

export interface ICreatePost {
  title: string
  slug: string
  categories: string[] 
  content?: string
  owner: string
}