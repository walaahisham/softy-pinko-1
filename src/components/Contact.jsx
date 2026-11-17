
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    setSent(true)
    e.target.reset()
  }

  const field =
    'w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm text-gray-700 placeholder:text-gray-400 outline-none transition focus:border-pinko focus:ring-2 focus:ring-pinko/20'

  return (
    <section
      id="contact"
      className="mt-24 bg-purple-50 px-5 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Title */}
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-semibold text-gray-800">
            Talk To Us
          </h3>

          <p className="mt-4 text-sm leading-7 text-gray-500">
            Maecenas pellentesque ante faucibus lectus vulputate
            sollicitudin. Cras feugiat hendrerit semper.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mt-14 grid gap-12 md:grid-cols-3">

          {/* Office Information */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Office
            </h3>

            <p className="mt-5 text-sm leading-8 text-gray-500">
              110-220 Quisque diam odio, maximus ac consectetur eu,
              10260 auctor non lorem.
            </p>

            <p className="mt-5 text-sm leading-8 text-gray-500">
              You are NOT allowed to re-distribute Softy Pinko
              template on any template collection websites.
              Thank you.
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={onSubmit}
            className="space-y-5 md:col-span-2"
          >

            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                aria-label="Full Name"
                className={field}
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                aria-label="Email Address"
                className={field}
              />
            </div>

            <textarea
              name="message"
              required
              placeholder="Your Message"
              aria-label="Your Message"
              className={`${field} h-40 resize-none`}
            />

            <div className="flex flex-col items-center gap-4 sm:flex-row">

              <button
                type="submit"
                className="inline-block rounded-full bg-[#8261ee] px-6 py-3 text-xs font-semibold uppercase text-white transition-all duration-300 hover:bg-[#ff589e]"
              >
                Send Message
              </button>

              {sent && (
                <p
                  role="status"
                  className="text-sm font-medium text-green-600"
                >
                  Thanks! Your message has been received.
                </p>
              )}

            </div>
          </form>

        </div>
      </div>
    </section>
  )
}
