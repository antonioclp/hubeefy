import Image from 'next/image'

// Interfaces.
import { ICategory } from '@/utils/interfaces'

// Api.
import { getCategories } from '@/api/index'

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
        {res.data.map((c: ICategory) => {
          const { id, name, icons } = c

          return (
            <div key={id}>
              <span>{name}</span>
              <Image
                src={icons[0].url}
                alt={name}
                height={icons[0].height}
                width={icons[0].width}
                priority
              />
            </div>
          )
        })}
      </section>
    </main>
  )
}
