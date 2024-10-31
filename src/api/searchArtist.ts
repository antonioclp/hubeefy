import axios from 'axios'

// Interfaces.
import { IApiResponse, IArtist } from '@/utils/interfaces'

// Token.
import getToken from './getToken'

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

    return {
      message: 'sucess.',
      data: response.data.artists.items
        .filter(
          (artist: IArtist) => artist.name.toLowerCase() === name.toLowerCase(),
        )
        .sort(
          (a: IArtist, b: IArtist) =>
            b.popularity - a.popularity ||
            b.followers.total - a.followers.total,
        ),
    }
  } catch (err) {
    return {
      message: 'error ocurred.',
      data: (err as Error).message,
    }
  }
}
