import { Link, useNavigate } from "react-router-dom";
import NotificationComponent from "./NotificationComponent";

function Header() {
  const navigate = useNavigate();
  
  return (
    <header className="header">
      <div className="logo-container">
        <img src="https://placehold.co/100x35/ffffff/0078d7?text=TTTN9" alt="Logo" />
        <h1 className="page-title">Trang tin tức nhóm 9 - TTTN</h1>
      </div>
      <div className="header-right">
        <button className="nav-button" onClick={() => navigate('/login')}>
          <i className="fas fa-user"></i>
          <span>Đăng nhập</span>
        </button>
        <NotificationComponent />
        <button className="icon-button">
          <i className="fas fa-th"></i>
        </button>
      </div>
    </header>
  );
}
  
export default Header;