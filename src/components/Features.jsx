const features = [
  {
    title: 'Componentes',
    text: 'La interfaz esta organizada en componentes reutilizables.',
  },
  {
    title: 'React',
    text: 'Cada seccion se renderiza de forma dinamica con React.',
  },
  {
    title: 'Vercel',
    text: 'El proyecto se despliega de forma continua en Vercel.',
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