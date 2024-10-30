import axios from 'axios'

// Token.
import getToken from './getToken'

/**
 * https://developer.spotify.com/documentation/web-api/reference/search
 */
export default async function searchArtist(name: string): Promise<any> {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  const url = 'https://api.spotify.com/v1/search'
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${await getToken()}`,
    },
    params: {
      q: name,
      type: 'artist',
    },
  })

  return response.data.artists.items
    .filter((artist: any) => artist.name.toLowerCase() === name.toLowerCase())
    .sort(
      (a: any, b: any) =>
        b.popularity - a.popularity || b.followers.total - a.followers.total,
    )
}
