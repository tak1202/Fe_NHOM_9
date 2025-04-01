import { NavLink } from 'react-router-dom';

function MenuNav() {
  const categories = [
    'Tin mới',
    'Thời sự',
    'Thế giới',
    'Kinh doanh',
    'Giải trí',
    'Thể thao',
    'Pháp luật',
    'Giáo dục',
    'Sức khỏe',
    'Đời sống',
    'Du lịch',
    'Khoa học',
    'Công nghệ',
  ];

  return (
    <nav className="menu-nav">
      <div className="menu-container">
        <ul className="menu-list">
          {categories.map((category, index) => (
            <li key={index}>
              <NavLink
                to={index === 0 ? '/' : category === 'Thời sự' ? '/thoi-su' : `/${category.toLowerCase()}`}
                className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
              >
                {category}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default MenuNav;