
import { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'
import { navLinks } from '../data'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('welcome')

  // Detect the visible section while scrolling
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-40% 0px -55% 0px',
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-4 z-50 w-full px-3 sm:top-8">

      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-6xl rounded-2xl border border-white/30 bg-white/66 px-5 py-4 shadow-md backdrop-blur-xl"
      >

        {/* Navbar Content */}
        <div className="flex w-full items-center justify-between gap-4">

          {/* Logo */}
          <a href="#welcome" className="shrink-0">
            <img
              src={logo}
              alt="Softy Pinko"
              width="160"
              height="30"
              className="h-auto w-36 object-contain sm:w-40"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 text-sm lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`whitespace-nowrap px-3 py-2 transition-colors duration-300 hover:text-[#ff589e] ${
                    active === link.id
                      ? 'font-semibold text-[#ff589e]'
                      : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex flex-col gap-1.5 rounded-lg border border-gray-200 p-2 transition hover:bg-[#f2f2fe] lg:hidden"
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label="Toggle navigation"
            onClick={() => setOpen((previous) => !previous)}
          >
            <span className="block h-0.5 w-5 bg-[#8261ee]" />
            <span className="block h-0.5 w-5 bg-[#8261ee]" />
            <span className="block h-0.5 w-5 bg-[#8261ee]" />
          </button>

        </div>

        {/* Mobile Navigation */}
        <ul
          id="nav-menu"
          className={`${
            open ? 'mt-4 flex flex-col' : 'hidden'
          } divide-y divide-gray-100 text-center text-sm lg:hidden`}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`block py-3 transition-colors duration-300 hover:text-[#ff589e] ${
                  active === link.id
                    ? 'font-semibold text-[#ff589e]'
                    : 'text-gray-600'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  )
}
