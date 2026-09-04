function Header() {
  return (
    <header className="header">
      <a href="#inicio" className="logo" aria-label="Pagina React — inicio">
        <span className="logo-mark" aria-hidden="true">
          r
        </span>
        <span className="logo-word">Pagina&nbsp;React</span>
      </a>
      <nav className="nav" aria-label="Navegacion principal">
        <a href="#inicio">Inicio</a>
        <a href="#caracteristicas">Rasgos</a>
        <a href="#acerca">Acerca</a>
        <a href="#contacto" className="nav-cta">
          Hablemos
        </a>
      </nav>
    </header>
  )
}

export default Header