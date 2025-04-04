function Header() {
    return (
      <header className="header">
        <div className="logo-container">
          <img src="https://placehold.co/100x35/ffffff/0078d7?text=TTTN9" alt="Logo" />
          <h1 className="page-title">Trang tin tức nhóm 9 - TTTN</h1>
        </div>
        <div className="header-right">
          <button className="nav-button">
            <i className="fas fa-user"></i>
            <span>Đăng nhập</span>
          </button>
          <button className="icon-button">
            <i className="fas fa-bell"></i>
          </button>
          <button className="icon-button">
            <i className="fas fa-th"></i>
          </button>
        </div>
      </header>
    );
  }
  
  export default Header;