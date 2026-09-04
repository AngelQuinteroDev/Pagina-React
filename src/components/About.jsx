function About() {
  return (
    <section id="acerca" className="about">
      <div className="about-card" data-reveal>
        <p className="about-text">
          Este proyecto es una SPA basica construida con React y Vite. Mas que
          funcionar, queria que se sintiera hecha con las manos: formas que no
          son perfectas, ritmos que no son exactos y suficiente aire para que
          la mirada descanse. El codigo vive en GitHub y la pieza se exhibe en
          Vercel.
        </p>
        <p className="about-sign">— Angel, hojalatero del codigo</p>
      </div>
      <svg
        className="badge"
        viewBox="0 0 120 120"
        aria-hidden="true"
      >
        <defs>
          <path
            id="badge-path"
            d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1 -92 0"
          />
        </defs>
        <text>
          <textPath href="#badge-path">
            REACT · VITE · GIT · VERCEL · REACT · VITE · GIT ·
          </textPath>
        </text>
        <circle
          cx="60"
          cy="60"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M60 53c2 5 5 8 9 9-4 1-7 4-9 9-2-5-5-8-9-9 4-1 7-4 9-9z"
          fill="currentColor"
        />
      </svg>
    </section>
  )
}

export default About