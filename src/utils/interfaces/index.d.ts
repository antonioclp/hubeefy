export interface IArtist {
  external_urls: {
    spotify: string
  }
  followers: {
    href: string | null
    total: number
  }
  genres: string[]
  id: string
  images: string[]
  name: string
  popularity: number
  type: string
}

export interface IApiResponse {
  message: string
  data: IArtist[] | string
}
