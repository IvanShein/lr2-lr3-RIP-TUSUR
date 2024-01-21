function Header(props) {
  return (
    <header className="header">
      <h1 className="header__title">
        FAQ
      </h1>
      <h2 className="header__subtitle">
        Лабораторная работа 2. РИП. JS/React. {props.name}
      </h2>
    </header>
  )
}

export default Header;
