import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewsItem from '../components/NewsItem';
import { useFetchData } from '../hooks/useFetchData';
import BreakingNews from '../components/BreakingNews'; // Sửa đường dẫn import

function Home() {
  const { data: newsData, fetchData, isLoading, error } = useFetchData('tin');

  useEffect(() => {
    fetchData();
  }, []);

  // Định dạng dữ liệu API cho NewsItem và kiểm tra id
  const formattedNewsData = newsData
    .map(item => {
      const formatted = {
        id: item.id || item._id || '',
        title: item.tieu_de || 'Không có tiêu đề',
        source: item.tac_gia || 'Nguồn không xác định',
        timestamp: item.ngay_dang_tin || item.created_at || 'Thời gian không xác định',
        category: item.loai_tin?.ten_loai_tin || 'Tổng hợp',
        image: 'https://cdnmedia.baotintuc.vn/Upload/3qVxwVtNEPp6Wp9kkF77g/files/2024/03/30/kinh-te-300324-a.jpg',
        description: item.mo_ta || '',
        likes: item.so_lan_xem || 0,
        commentsEnabled: item.trang_thai !== false,
      };
      console.log('Formatted item in Home:', formatted); // Debug từng item
      return formatted;
    })
    .filter(news => news && news.id); // Loại bỏ các item không có id hoặc không hợp lệ

  console.log('Dữ liệu đã định dạng:', formattedNewsData);

  return (
    <div className="main-content">
      {/* Hiển thị BreakingNews */}
      <BreakingNews />

      <div className="news-container">
        <h2 className="section-title">
          Tin tức nổi bật <span className="highlights-tag">Mới nhất</span>
        </h2>
        {isLoading ? (
          <p>Đang tải tin tức...</p>
        ) : error ? (
          <p>Lỗi: {error}</p>
        ) : formattedNewsData.length === 0 ? (
          <p>Không có tin tức nào để hiển thị.</p>
        ) : (
          <div className="news-grid">
            {formattedNewsData.map((news) => (
              <Link to={`/tin/${news.id}`} key={news.id} style={{ textDecoration: 'none' }}>
                <NewsItem news={news} /> 
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;