const Header = () => (
    <header className="main-header">

        <div className="main-header__menu">
            <form className="menu__search-form">
                <input
                    className="search-form__input"
                    type="text" id="search"
                    name="search"
                    placeholder="Поиск"
                />
            </form>
            <img
                className="menu__icons"
                src="/img/menu-ico.png"
                alt="Иконки"
                width="126"
                height="30" />
        </div>
        <nav className="main-header__navigation">
            <ul className="navigation__nav-list">
                <li className="nav-list__item">
                    <a href="/" className="link">Страница 1</a>
                </li>
                <li className="nav-list__item">
                    <a href="/" className="link">Страница 2</a>
                </li>
                <li className="nav-list__item">
                    <a href="/" className="link">Страница 3</a>
                </li>
            </ul>
            <a href="/" className="link">
                <img
                    className="main-header__logo"
                    src="/img/logo.png"
                    alt="Логотип"
                    width="160"
                    height="50"
                />
            </a>
            <ul className="navigation__nav-list">
                <li className="nav-list__item">
                    <a href="/" className="link">Страница 4</a>
                </li>
                <li className="nav-list__item">
                    <a href="/" className="link">Страница 5</a>
                </li>
                <li className="nav-list__item">
                    <a href="/" className="link">Страница 6</a>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
