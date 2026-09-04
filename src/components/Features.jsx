const features = [
  {
    icon: '⚛️',
    title: 'Componentes',
    text: 'La interfaz esta dividida en componentes reutilizables escritos en JSX.',
  },
  {
    icon: '⚡',
    title: 'Vite',
    text: 'Desarrollo rapido con recarga en caliente (HMR) y build optimizado.',
  },
  {
    icon: '🚀',
    title: 'Vercel',
    text: 'Desplegada como SPA estatica, lista para compartirse en internet.',
  },
]

function Features() {
  return (
    <section id="caracteristicas" className="section">
      <h2 className="section-title">Caracteristicas</h2>
      <div className="cards">
        {features.map((feature) => (
          <article className="card" key={feature.title}>
            <span className="card-icon" aria-hidden="true">
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