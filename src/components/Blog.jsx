
import { posts } from '../data'

export default function Blog() {
  return (
    <section id="blog" className="mx-auto my-20 max-w-6xl px-5 text-center">

      {/* Section Title */}
      <div className="mx-auto max-w-2xl">
        <h3 className="text-3xl font-semibold text-gray-800">
          Blog Entries
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-500">
          Integer molestie aliquam gravida. Nullam nec arcu finibus,
          imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {posts.map((p) => (
          <article
            key={p.title}
            className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={p.img}
              alt={p.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">

              <h5 className="mb-4 text-lg font-semibold text-gray-800 transition-colors group-hover:text-pinko">
                <a href="#blog">{p.title}</a>
              </h5>

              <p className="mb-6 text-sm leading-7 text-gray-500">
                {p.text}
              </p>

              <a
                href="#blog"
                className="inline-block rounded-full bg-pinko px-7 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Read More
              </a>

            </div>
          </article>
        ))}

      </div>
    </section>
  )
}
