function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-art" aria-hidden="true">
        <span className="blob blob-one" />
        <span className="blob blob-two" />
        <span className="blob blob-three" />
      </div>
      <div className="hero-copy" data-reveal>
        <p className="hero-kicker">
          <span className="kicker-leaf" aria-hidden="true" />
          Semana 1 · React + Vite
        </p>
        <h1 className="hero-title">
          Una web que se siente{' '}
          <span className="title-word">
            <em>hecha a mano</em>
            <svg
              className="squiggle"
              viewBox="0 0 220 14"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M4 9 C40 3 80 12 120 7 S 190 4 216 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>
        <p className="hero-lead">
          Una SPA basica construida con React y Vite, con el cariño de una
          pieza artesanal: formas imperfectas, ritmos que respiran y un aire
          que invita a quedarse.
        </p>
        <div className="hero-actions">
          <a href="#caracteristicas" className="btn btn-primary">
            Ver rasgos
          </a>
          <a href="#contacto" className="btn btn-ghost">
            Conoce el taller
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero