
import { plans } from '../data'

export default function Price() {
  return (
    <section id="price" className="mt-14 bg-[#f2f2fe] py-20">
      <div className="mx-auto max-w-6xl px-5">

        {/* Section Title */}
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-medium text-gray-800">
            Pricing Plans
          </h3>

          <p className="mt-4 text-sm leading-7 text-gray-500">
            Donec vulputate urna sed rutrum venenatis. Cras consequat magna
            quis arcu elementum, quis congue risus volutpat.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className="group rounded-2xl bg-white px-5 pb-10 pt-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-3"
            >
              <p className="mb-5 font-medium text-gray-800">
                {p.name}
              </p>

              {/* Price */}
              <div
                className={`mx-auto w-[70%] rounded-xl py-3 text-xl text-white shadow-md ${
                  p.featured
                    ? 'bg-[#ff589e]'
                    : 'bg-[#8261ee]'
                }`}
              >
                <p>
                  <span className="text-2xl">$</span> {p.price}
                </p>

                <p>
                  <small className="text-sm">monthly</small>
                </p>
              </div>

              {/* Features List */}
              <ul className="my-7 space-y-4 text-sm text-gray-500">
                {p.features.map(([label, included]) => (
                  <li
                    key={label}
                    className={
                      included
                        ? ''
                        : 'text-gray-400 line-through'
                    }
                  >
                    {label}
                  </li>
                ))}
              </ul>

              {/* Purchase Button */}
              <a
                href="#contact"
                className="inline-block rounded-full bg-[#8261ee] px-6 py-3 text-xs font-semibold uppercase text-white transition-all duration-300 hover:bg-[#ff589e]"
              >
                Purchase now
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
