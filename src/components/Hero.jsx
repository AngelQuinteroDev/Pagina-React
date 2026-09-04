function Hero() {
  return (
    <section id="inicio" className="hero">
      <p className="hero-badge">React + Vite</p>
      <h1>
        Mi primera SPA con <span>React</span> y <span>Vite</span>
      </h1>
      <p className="hero-subtitle">
        Una Single Page Application basica creada como parte de la Semana 1:
        crea tu primera app con React, subela a GitHub y despliegala en Vercel.
      </p>
      <div className="hero-actions">
        <a href="#caracteristicas" className="btn btn-primary">
          Ver caracteristicas
        </a>
        <a
          href="https://github.com/AngelQuinteroDev/Pagina-React"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Ver repositorio
        </a>
      </div>
    </section>
  )
}

export default Hero