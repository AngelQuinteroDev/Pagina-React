const features = [
  {
    title: 'Componentes',
    text: 'La pagina esta dividida en componentes reutilizables.',
  },
  {
    title: 'React',
    text: 'Cada parte se renderiza con React y se actualiza sola.',
  },
  {
    title: 'Vercel',
    text: 'La pagina esta publicada gratis en Vercel.',
  },
]

function Features() {
  return (
    <section id="caracteristicas" className="features">
      <h2>Caracteristicas</h2>
      <div className="cards">
        {features.map((feature) => (
          <div className="card" key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features