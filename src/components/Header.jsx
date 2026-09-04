function Header() {
  return (
    <header className="header">
      <a href="#inicio" className="logo">
        <span className="logo-mark">R</span>
        <span className="logo-text">Pagina React</span>
      </a>
      <nav className="nav">
        <a href="#inicio">Inicio</a>
        <a href="#caracteristicas">Caracteristicas</a>
        <a href="#acerca">Acerca</a>
        <a href="#contacto" className="btn">Contacto</a>
      </nav>
    </header>
  )
}

export default Header