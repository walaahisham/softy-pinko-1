
import icon from '../assets/images/featured-item-01.png'
import { features } from '../data'

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto -mt-48 max-w-6xl px-5">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className="group rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2"
          >
            <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#8261ee] transition-colors duration-300 group-hover:bg-[#ff589e]">
              <img
                src={icon}
                alt=""
                width="56"
                height="48"
                className="object-contain"
              />
            </div>

            <h5 className="text-lg font-medium text-gray-800">
              {f.title}
            </h5>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              {f.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
