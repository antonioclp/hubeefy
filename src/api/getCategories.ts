import axios from 'axios'

// Token.
import getToken from './getToken'

export default async function getCategories(): Promise<any> {
  const url = 'https://api.spotify.com/v1/browse/categories'

  await new Promise((resolve) => setTimeout(resolve, 5000))

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${await getToken()}`,
    },
    params: {
      locale: 'pt_BR',
      limit: 50,
      offset: 0,
    },
  })

  return response.data
}
