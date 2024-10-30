import { searchArtist } from '@/api/index'

/**
 * Development branch.
 * Homepage.
 * @returns {JSX.Element}
 */
export default async function Home(): Promise<JSX.Element> {
  const res = await searchArtist('Beyoncé')
  console.log(res)
  return (
    <main>
      <section>
        <span>Homepage</span>
      </section>
    </main>
  )
}
