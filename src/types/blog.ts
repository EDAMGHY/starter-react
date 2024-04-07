export interface Blog {
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
