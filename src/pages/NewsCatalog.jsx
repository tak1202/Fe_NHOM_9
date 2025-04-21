import { Link } from 'react-router-dom';
import NewsItem from '../components/NewsItem';

const newsData = [
  { id: 1, title: "Quân đội Việt Nam tìm kiếm các nạn nhân động đất Myanmar trong đống đổ nát", source: "VietnamPlus", timestamp: "6 giờ trước", category: "Thời sự", image: "https://placehold.co/800x500/0078d7/ffffff?text=Cứu+trợ+Myanmar", description: "Đội cứu hộ quân đội Việt Nam đã được điều động sang Myanmar để hỗ trợ công tác tìm kiếm và cứu nạn sau trận động đất kinh hoàng xảy ra tuần trước. Các đội cứu hộ đang nỗ lực tìm kiếm những người còn sống sót trong các đống đổ nát.", likes: 72, commentsEnabled: true },
  { id: 2, title: "Bão số 3 sắp đổ bộ vào các tỉnh miền Trung, người dân cần khẩn trương di dời", source: "Tuổi Trẻ", timestamp: "8 giờ trước", category: "Thời tiết", image: "https://placehold.co/400x300/f2f2f2/666666?text=Bão+số+3", likes: 105 },
  { id: 3, title: "Chính sách nổi bật có hiệu lực từ tháng 4/2025", source: "VnExpress", timestamp: "14 giờ trước", category: "Chính trị", image: "https://placehold.co/400x300/f2f2f2/666666?text=Chính+sách", likes: 87 },
  { id: 4, title: "Cao tốc Bắc-Nam đoạn qua Phú Yên đạt 85% tiến độ, dự kiến hoàn thành cuối năm", source: "Dân Trí", timestamp: "1 ngày trước", category: "Giao thông", image: "https://placehold.co/400x300/f2f2f2/666666?text=Cao+tốc", likes: 46 },
  { id: 5, title: "Hàng chục tấn rác thải nhựa trong lòng hồ Trị An được đưa lên bờ", source: "Lao Động", timestamp: "5 giờ trước", category: "Môi trường", image: "https://placehold.co/400x300/f2f2f2/666666?text=Rác+thải", likes: 65 },
  { id: 6, title: "Triệt phá đường dây lừa đảo qua mạng, chiếm đoạt hàng tỷ đồng", source: "Công An TP.HCM", timestamp: "2 giờ trước", category: "An ninh - Trật tự", image: "https://placehold.co/400x300/f2f2f2/666666?text=An+ninh", likes: 58 },
  { id: 7, title: "Hội nghị Bộ trưởng ASEAN thảo luận về an ninh khu vực và biến đổi khí hậu", source: "Chính Phủ", timestamp: "1 ngày trước", category: "Chính trị", image: "https://placehold.co/800x500/f2f2f2/666666?text=Hội+nghị", description: "Các Bộ trưởng Ngoại giao ASEAN đã tề tựu tại Hà Nội để thảo luận về những thách thức khu vực, bao gồm tình hình an ninh Biển Đông và chiến lược ứng phó với biến đổi khí hậu. Việt Nam đóng vai trò trung tâm trong việc thúc đẩy hợp tác khu vực.", likes: 149, commentsEnabled: true },
];

function NewsCatalog() {
  return (
    <div className="main-content">
      <ul className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
        <li className="breadcrumb-item active">Thời sự</li>
      </ul>

      <div className="breaking-news">
        <div className="breaking-news-header">
          <div className="breaking-label">Tin nóng</div>
          <div className="breaking-time"><i className="far fa-clock"></i> Vừa cập nhật</div>
        </div>
        <h3 className="breaking-title">Thủ tướng yêu cầu thanh tra toàn diện việc tăng giá điện</h3>
        <p className="breaking-description">Thủ tướng Chính phủ đã chỉ đạo Thanh tra Chính phủ tiến hành thanh tra toàn diện về việc tăng giá điện của EVN vừa qua, sau khi nhận được nhiều phản ánh từ người dân và doanh nghiệp.</p>
      </div>

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
        <h2 className="section-title"><i className="fas fa-newspaper"></i> Tin tức thời sự mới nhất</h2>
        <div className="news-grid">
          {newsData.map((news) => (
            <Link to={`/news/${news.id}`} key={news.id} style={{ textDecoration: 'none' }}>
              <NewsItem news={news} large={news.description} />
            </Link>
          ))}
        </div>
      </div>

      <div className="pagination">
        <button className="pagination-button">&lt;</button>
        <button className="pagination-button active">1</button>
        <button className="pagination-button">2</button>
        <button className="pagination-button">3</button>
        <button className="pagination-button">&gt;</button>
      </div>
    </div>
  );
}

export default NewsCatalog;