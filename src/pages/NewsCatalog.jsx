import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import NewsItem from '../components/NewsItem';

function NewsCatalog() {
  const { id } = useParams(); // Lấy id danh mục từ URL
  const { data: newsData, fetchData, isLoading } = useFetchData(`loai-tin/${id}/tin`);

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]); // Chỉ phụ thuộc vào id

  // Debug dữ liệu nhận được
  console.log('newsData:', newsData);
  console.log('isLoading:', isLoading);

  // Định dạng dữ liệu cho NewsItem, đảm bảo id luôn có giá trị
  const formattedNewsData = Array.isArray(newsData)
    ? newsData.map(item => {
        const newsItem = {
          id: item.id || item._id || '', // Đảm bảo id không bị undefined
          title: item.tieu_de || 'Không có tiêu đề',
          source: item.tac_gia || 'Nguồn không xác định',
          timestamp: item.ngay_dang_tin || item.created_at || 'Thời gian không xác định',
          category: item.loai_tin?.ten_loai_tin || 'Tổng hợp',
          image: 'https://cdnmedia.baotintuc.vn/Upload/3qVxwVtNEPp6Wp9kkF77g/files/2024/03/30/kinh-te-300324-a.jpg',
          description: item.mo_ta || '',
          likes: item.so_lan_xem || 0,
          commentsEnabled: item.trang_thai !== false,
        };
        console.log('Formatted news item:', newsItem); // Debug từng item
        return newsItem;
      })
    : [];

  console.log('formattedNewsData:', formattedNewsData);

  return (
    <div className="main-content">
      <ul className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
        <li className="breadcrumb-item active">Danh mục: {formattedNewsData.length > 0 ? formattedNewsData[0].category : 'Không xác định'}</li>
      </ul>

      <div className="category-filter">
        <button className="filter-button active">Tất cả</button>
        <button className="filter-button">Chính trị</button>
        <button className="filter-button">Giao thông</button>
        <button className="filter-button">Môi trường</button>
        <button className="filter-button">An ninh - Trật tự</button>
        <button className="filter-button">Thời tiết</button>
        <button className="filter-button">Phóng sự</button>
      </div>

      <div className="news-container">
        <h2 className="section-title"><i className="fas fa-newspaper"></i> Tin tức mới nhất</h2>
        {isLoading ? (
          <p>Đang tải tin tức...</p>
        ) : formattedNewsData.length === 0 ? (
          <p>Không có tin tức nào trong danh mục này.</p>
        ) : (
          <div className="news-grid">
            {formattedNewsData.map((news) => (
              <Link to={`/tin/${news.id}`} key={news.id} style={{ textDecoration: 'none' }}>
                <NewsItem news={news} large={!!news.description} />
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="pagination">
        <button className="pagination-button">Quay về</button>
        <button className="pagination-button active">1</button>
        <button className="pagination-button">2</button>
        <button className="pagination-button">3</button>
        <button className="pagination-button">4</button>
      </div>
    </div>
  );
}

export default NewsCatalog;