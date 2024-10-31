// Api.
import { searchArtist, getCategories } from '@/api/index'

/**
 * Development branch.
 * Homepage.
 * @returns {JSX.Element}
 */
export default async function Home(): Promise<JSX.Element> {
  const res = await getCategories()
  console.log('response ', res)
  return (
    <main>
      <section>
        {res.categories.items.map((item) => {
          return (
            <div key={item.id}>
              <span>{item.name}</span>
              <br />
            </div>
          )
        })}
      </section>
    </main>
  )
}
