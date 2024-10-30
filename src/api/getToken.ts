import axios from 'axios'

const clientId = process.env.CLIENT_ID_SPOTIFY
const clientSecret = process.env.CLIENT_SECRET_SPOTIFY

/**
 * https://developer.spotify.com/documentation/web-api/tutorials/getting-started
 */
export default async function getToken(): Promise<string> {
  const url = 'https://accounts.spotify.com/api/token'
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

  try {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    const response = await axios.post(url, 'grant_type=client_credentials', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${auth}`,
      },
    })

    return response.data.access_token
  } catch (error) {
    console.error('Error fetching token:', error)
    return 'no token provided.'
  }
}
