import axios from 'axios'

// Interfaces.
import { ICategory } from '@/utils/interfaces'

// Token.
import getToken from './getToken'

interface IApiResponse {
  message: string
  data: ICategory[]
}

export default async function getCategories(): Promise<IApiResponse> {
  const url = 'https://api.spotify.com/v1/browse/categories'

  await new Promise((resolve) => setTimeout(resolve, 5000))

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${await getToken()}`,
    },
    params: {
      locale: 'pt_BR',
      limit: 10,
      offset: 0,
    },
  })

  const categories: ICategory[] = response.data.categories.items

  return {
    message: 'sucess',
    data: categories,
  }
}
