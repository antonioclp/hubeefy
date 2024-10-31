import axios from 'axios'

// Interfaces.
import { IArtist } from '@/utils/interfaces'

// Token.
import getToken from './getToken'

interface IApiResponse {
  message: string
  data: IArtist[]
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/search
 */
export default async function searchArtist(
  name: string,
): Promise<IApiResponse> {
  const url = 'https://api.spotify.com/v1/search'
  try {
    await new Promise((resolve) => setTimeout(resolve, 5000))

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
      params: {
        q: name,
        type: 'artist',
      },
    })

    if (response.status !== 200) {
      throw new Error('internal server error.')
    }

    const artists: IArtist[] = response.data.artists.items
      .filter(
        (artist: IArtist) => artist.name.toLowerCase() === name.toLowerCase(),
      )
      .sort(
        (a: IArtist, b: IArtist) =>
          b.popularity - a.popularity || b.followers.total - a.followers.total,
      )

    return {
      message: 'sucess.',
      data: artists,
    }
  } catch (err) {
    return {
      message: (err as Error).message,
      data: [],
    }
  }
}
