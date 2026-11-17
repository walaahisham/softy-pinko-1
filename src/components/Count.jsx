
import { useEffect, useRef, useState } from 'react'
import bg from '../assets/images/fun-facts-bg.png'
import circle from '../assets/images/circle-dec.png'
import { stats } from '../data'

function CountUp({ value }) {
  const [count, setCount] = useState(0)
  const [start, setStart] = useState(false)
  const ref = useRef(null)

  const target = Number(value)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!start) return

    let current = 0
    const duration = 2000
    const steps = 60
    const increment = target / steps
    const intervalTime = duration / steps

    const timer = setInterval(() => {
      current += increment

      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, intervalTime)

    return () => clearInterval(timer)
  }, [start, target])

  return <span ref={ref}>{count}</span>
}

export default function Count() {
  return (
    <section
      id="count"
      className="relative overflow-hidden bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${bg})` }}
    >

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="relative flex flex-col items-center justify-center text-white"
          >
            {index !== 0 && (
              <img
                src={circle}
                alt=""
                className="absolute -left-8 top-1/2 hidden -translate-y-1/2 lg:block"
              />
            )}

            <h2 className="text-4xl font-bold">
              <CountUp value={stat.value} />+
            </h2>

            <p className="mt-3 text-base font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
