
import left from '../assets/images/left-image.png'
import right from '../assets/images/right-image.png'

export default function About() {
  return (
    <section
      id="about"
      className="container-x mt-24 space-y-24"
    >
      {/* First row */}
      <div
        className="relative grid items-center gap-8 px-4 pb-12 md:grid-cols-2 md:px-14
        after:absolute after:bottom-0 after:left-1/2
        after:h-px after:w-[70%] after:-translate-x-1/2
        after:bg-line"
      >
        <img
          src={left}
          alt="Team discussing a project"
          width="280"
          height="280"
          loading="lazy"
          data-aos="fade-right"
          className="mx-auto md:mx-0"
        />

        <div data-aos="fade-left">
          <h3 className="text-2xl font-medium text-ink">
            Let’s discuss about your project
          </h3>

          <p className="mt-6 leading-7 text-body">
            Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue
            blandit, at finibus leo efficitur. Nam gravida purus non sapien
            auctor, ut aliquam magna ullamcorper.
          </p>
        </div>
      </div>

      {/* Second row */}
      <div className="grid items-center gap-8 px-4 md:grid-cols-2 md:px-14">
        <div data-aos="fade-right">
          <h3 className="text-2xl font-medium text-ink">
            We can help you to grow your business
          </h3>

          <p className="mt-6 leading-7 text-body">
            Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis
            nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor
            luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis
            dolor elit.
          </p>
        </div>

        <img
          src={right}
          alt="Business growth illustration"
          width="288"
          height="320"
          loading="lazy"
          data-aos="fade-left"
          className="mx-auto md:ml-auto md:mr-0"
        />
      </div>
    </section>
  )
}
