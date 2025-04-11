export interface categoryRes {
  results: number
  metadata: metaData
  data: category[]
}

export interface metaData {
  currentPage: number
  numberOfPages: number
  limit: number
}

export interface category {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}
