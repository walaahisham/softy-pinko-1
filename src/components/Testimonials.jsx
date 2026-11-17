
import { testimonials } from '../data'

export default function Testimonials() {
  return (
    <section id="testi" className="mx-auto my-20 max-w-6xl px-5 text-center">

      {/* Section Title */}
      <div className="mx-auto max-w-2xl">
        <h3 className="text-3xl font-medium text-gray-800">
          What do they say?
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-500">
          Donec tempus, sem non rutrum imperdiet, lectus orci fringilla
          nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.
        </p>
      </div>

      {/* Testimonials Cards */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="group rounded-2xl bg-white px-6 py-7 text-left shadow-lg transition-all duration-300 hover:-translate-y-2"
          >

            {/* Quote Icon */}
            <div className="text-4xl leading-none text-[#ff589e]">
              ❝
            </div>

            {/* Review */}
            <blockquote className="py-6 text-sm leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-800">
              {t.text}
            </blockquote>

            {/* Customer Info */}
            <figcaption className="transition-transform duration-300 group-hover:translate-x-3">
              <h5 className="font-medium text-gray-800">
                {t.name}
              </h5>

              <p className="mt-1 text-sm text-[#ff589e]">
                {t.role}
              </p>
            </figcaption>

          </figure>
        ))}
      </div>
    </section>
  )
}
