import { Link } from 'react-router-dom';
import BreakingNews from '../components/BreakingNews';
import NewsItem from '../components/NewsItem';

// Sample news data (you can replace this with an API or dynamic source)
const newsData = [
  {
    id: 1,
    title: "Quân đội Việt Nam tìm kiếm các nạn nhân động đất Myanmar trong đống đổ nát",
    source: "VietnamPlus",
    timestamp: "6 giờ trước",
    category: "Thời sự",
    image: "https://placehold.co/400x300/0078d7/ffffff?text=Cứu+hộ+động+đất",
    likes: 327,
  },
  {
    id: 2,
    title: "5 thói quen giúp Elon Musk thành tỷ phú",
    source: "Ngôi sao",
    timestamp: "4 ngày trước",
    category: "Doanh nhân",
    image: "https://placehold.co/400x300/f2f2f2/666666?text=Elon+Musk",
    likes: 128,
  },
  {
    id: 3,
    title: "Thủ tướng tiếp 20 đại học hàng đầu Mỹ, đề xuất hợp tác đào tạo nhân lực",
    source: "Tuổi trẻ",
    timestamp: "22 giờ trước",
    category: "Giáo dục",
    image: "https://placehold.co/400x300/f2f2f2/666666?text=Đại+học",
    likes: 75,
  },
  {
    id: 4,
    title: "Chính sách nổi bật có hiệu lực từ tháng 4",
    source: "VnExpress",
    timestamp: "14 giờ trước",
    category: "Pháp luật",
    image: "https://placehold.co/400x300/f2f2f2/666666?text=Chính+sách",
    likes: 87,
  },
  {
    id: 5,
    title: "9 kiểu váy tối kỵ đối với phụ nữ tuổi 40",
    source: "VTC News",
    timestamp: "5 ngày trước",
    category: "Thời trang",
    image: "https://placehold.co/400x300/f2f2f2/666666?text=Thời+trang",
    likes: 210,
  },
  {
    id: 6,
    title: "Game xây dựng thành phố 2025 - Trải nghiệm mới",
    source: "Forge of Empires",
    timestamp: "3 giờ trước",
    category: "Game",
    image: "https://placehold.co/400x300/f2f2f2/666666?text=Game",
    likes: 142,
  },
];

function Home() {
  return (
    <div className="main-content">
      <BreakingNews />
      <div className="news-container">
        <h2 className="section-title">
          Tin tức nổi bật <span className="highlights-tag">Mới nhất</span>
        </h2>
        <div className="news-grid">
          {newsData.map((news) => (
            <Link to={`/news/${news.id}`} key={news.id} style={{ textDecoration: 'none' }}>
              <NewsItem news={news} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;