
import textLogo from '../assets/images/text-logo.png'

const icons = [
  'bxl-html5',
  'bxl-tailwind-css',
  'bxl-react',
  'bxl-javascript',
  'bxs-file-json',
]

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-r from-[#a759d1] to-[#8261ee] py-12 text-center text-white"
    >
      <div className="mx-auto max-w-6xl px-5">

        {/* Social and technology icons */}
        <div
          className="flex justify-center gap-5 text-2xl"
          aria-hidden="true"
        >
          {icons.map((icon) => (
            <i
              key={icon}
              className={`bx ${icon} transition-transform duration-300 hover:-translate-y-1`}
            />
          ))}
        </div>

        <hr className="my-6 border-white/30" />

        {/* Copyright */}
        <p className="flex flex-wrap items-center justify-center gap-2 text-sm">
          COPYRIGHT © {new Date().getFullYear()} SOFTY PINKO COMPANY - DESIGN:

          <img
            src={textLogo}
            alt="Template Mo"
            className="w-16 object-contain"
          />
        </p>

      </div>
    </footer>
  )
}
