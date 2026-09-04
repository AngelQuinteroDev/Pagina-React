const features = [
  {
    title: 'Componentes',
    text: 'La interfaz se arma con piezas sueltas y reutilizables, como teselas de ceramica en un mismo taller.',
    tint: 'var(--sage)',
    tilt: '-0.7deg',
    lift: '0px',
    delay: '0s',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="16" cy="16" r="7" />
        <circle cx="33" cy="20" r="7" />
        <circle cx="22" cy="35" r="7" />
        <path d="M20 21 28 24l-3 7" />
      </svg>
    ),
  },
  {
    title: 'Vite',
    text: 'Recarga en caliente y un build veloz: el horno nunca se enfria mientras trabajas.',
    tint: 'var(--clay)',
    tilt: '0.8deg',
    lift: '-24px',
    delay: '0.12s',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 8C12 14 9 26 12 40c12-1 21-8 24-20-6-8-10-10-14-12z" />
        <path d="M22 8c2 12-1 24-8 32" />
      </svg>
    ),
  },
  {
    title: 'Vercel',
    text: 'Desplegada como SPA lista para compartir: la pieza sale del taller y se exhibe en la vitrina.',
    tint: 'var(--ochre)',
    tilt: '-0.4deg',
    lift: '12px',
    delay: '0.24s',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 34c0-14 8-23 24-27-4 16-13 25-24 27z" />
        <path d="M12 34c6-6 12-10 18-13" />
      </svg>
    ),
  },
]

function Features() {
  return (
    <section id="caracteristicas" className="section features">
      <h2 className="section-title" data-reveal>
        Rasgos <span className="section-title-soft">del taller</span>
      </h2>
      <div className="cards">
        {features.map((feature) => (
          <article
            className="card"
            key={feature.title}
            data-reveal
            style={
              {
                '--tilt': feature.tilt,
                '--lift': feature.lift,
                '--reveal-delay': feature.delay,
                '--tint': feature.tint,
              }
            }
          >
            <span className="icon-blob" aria-hidden="true">
              {feature.icon}
            </span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features