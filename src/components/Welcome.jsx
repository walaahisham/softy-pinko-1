
import banner from '../assets/images/banner-bg.png'

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 pb-56 pt-32 text-center text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="mx-auto max-w-3xl">

        {/* Main Heading */}
        <h1 className="text-3xl font-medium leading-tight sm:text-4xl">
          We provide the best{' '}
          <strong className="font-semibold">strategy</strong>
        </h1>

        <h2 className="mt-2 text-xl font-medium sm:text-2xl">
          to grow up your{' '}
          <strong className="font-semibold">business</strong>
        </h2>

        {/* Description */}
        <p className="mx-auto max-w-xl py-8 text-sm leading-7 sm:text-base">
          Softy Pinko is a professional React &amp; Tailwind theme designed
          for your company at absolutely free of charge.
        </p>

        {/* Button */}
        <a
          href="#about"
          className="inline-block rounded-full bg-[#ff589e] px-7 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#8261ee]"
        >
          Discover more
        </a>

      </div>
    </section>
  )
}
