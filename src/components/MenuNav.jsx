import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useFetchData } from '../hooks/useFetchData';


function MenuNav() {
  const { data, fetchData, isLoading } = useFetchData("loai-tin")

  useEffect(() => {
    fetchData()
  }, []);

  if (isLoading) return <nav className="menu-nav">Đang tải danh mục...</nav>;

  return (
    <nav className="menu-nav">
      <div className="menu-container">
        <ul className="menu-list">
          {data.map((category, index) => (
            <li key={index}>
              <NavLink
                to={`/loai-tin/${category.id}`}
                className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
              >
                {category.ten_loai_tin}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default MenuNav;