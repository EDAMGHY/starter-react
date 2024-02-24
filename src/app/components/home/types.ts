import { IconType } from "react-icons"

export interface ILatestBlog {
  title?: string
  image?: string
  author?: {
    name?: string
    avatar?: string
  }
  createdAt?: string
  category?: string
  excerpt?: string

  url?: string
}

export interface IPopularCategory {
  icon?: IconType
  title?: string
  description?: string
}
