
import bg from '../assets/images/work-process-bg.png'
import rocket from '../assets/images/work-process-item-01.png'
import { steps } from '../data'

export default function Work() {
  return (
    <section
      id="work"
      className="my-20 bg-cover bg-center bg-no-repeat px-5 py-24 text-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Title */}
        <div className="mx-auto max-w-2xl text-white">
          <h3 className="text-3xl font-medium">
            Work Process
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/90">
            Aenean nec tempor metus. Maecenas ligula dolor, commodo in
            imperdiet interdum, vehicula ut ex. Donec ante diam.
          </p>
        </div>

        {/* Work Process Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((s) => (
            <article
              key={s.title}
              className="group relative z-0 rounded-2xl bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-3 after:absolute after:inset-x-0 after:-bottom-2.5 after:-z-10 after:h-full after:rounded-2xl after:bg-white/20"
            >

              {/* Rocket Icon */}
              <img
                src={rocket}
                alt=""
                width="32"
                height="32"
                className="mx-auto object-contain"
              />

              {/* Step Title */}
              <h5 className="py-3 font-medium text-gray-800 transition-colors duration-300 group-hover:text-[#ff589e]">
                {s.title}
              </h5>

              {/* Step Description */}
              <p className="text-sm leading-6 text-gray-500 transition-colors duration-300 group-hover:text-gray-800">
                {s.text}
              </p>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
