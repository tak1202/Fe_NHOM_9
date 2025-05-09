import { useParams } from 'react-router-dom';
import { useState } from 'react';
import WeatherForecast from '../components/WeatherForecast';
import CommentSection from './CommentSection';

const newsData = [
  {
    id: 1,
    title: 'Quân đội Việt Nam tìm kiếm các nạn nhân động đất Myanmar trong đống đổ nát',
    source: 'VietnamPlus',
    timestamp: '6 giờ trước',
    category: 'Thời sự',
    image: 'https://placehold.co/800x500/0078d7/ffffff?text=Cứu+hộ+động+đất',
    description:
      'Đội cứu hộ quân đội Việt Nam đã được điều động sang Myanmar để hỗ trợ công tác tìm kiếm và cứu nạn sau trận động đất kinh hoàng xảy ra tuần trước...',
    likes: 327,
    commentsEnabled: true,
    sharesEnabled: true,
  },
  {
    id: 2,
    title: '5 thói quen giúp Elon Musk thành tỷ phú',
    source: 'Ngôi sao',
    timestamp: '4 ngày trước',
    category: 'Doanh nhân',
    image: 'https://placehold.co/400x300/f2f2f2/666666?text=Elon+Musk',
    description:
      'Elon Musk đã chia sẻ về những thói quen giúp ông đạt được thành công vang dội trong kinh doanh và công nghệ.',
    likes: 128,
    commentsEnabled: true,
    sharesEnabled: true,
  },
  {
    id: 3,
    title: 'Thủ tướng tiếp 20 đại học hàng đầu Mỹ, đề xuất hợp tác đào tạo nhân lực',
    source: 'Tuổi trẻ',
    timestamp: '22 giờ trước',
    category: 'Giáo dục',
    image: 'https://placehold.co/400x300/f2f2f2/666666?text=Đại+học',
    description:
      'Thủ tướng đã có buổi gặp gỡ với đại diện 20 trường đại học hàng đầu Mỹ để thảo luận về hợp tác giáo dục...',
    likes: 75,
    commentsEnabled: true,
    sharesEnabled: true,
  },
  {
    id: 4,
    title: 'Chính sách nổi bật có hiệu lực từ tháng 4/2025',
    source: 'VnExpress',
    timestamp: '14 giờ trước',
    category: 'Pháp luật',
    image: 'https://placehold.co/400x300/f2f2f2/666666?text=Chính+sách',
    description:
      'Một số chính sách mới sẽ có hiệu lực từ tháng 4, ảnh hưởng đến nhiều lĩnh vực trong đời sống xã hội.',
    likes: 87,
    commentsEnabled: true,
    sharesEnabled: true,
  },
  {
    id: 5,
    title: '9 kiểu váy tối kỵ đối với phụ nữ tuổi 40',
    source: 'VTC News',
    timestamp: '5 ngày trước',
    category: 'Thời trang',
    image: 'https://placehold.co/800x500/f2f2f2/666666?text=Thời+trang',
    description:
      'Phong cách thời trang của phụ nữ sau tuổi 40 nên chú trọng vào sự thanh lịch và tinh tế...',
    likes: 210,
    commentsEnabled: true,
    sharesEnabled: true,
  },
  {
    id: 6,
    title: 'Game xây dựng thành phố 2025 - Trải nghiệm mới',
    source: 'Forge of Empires',
    timestamp: '3 giờ trước',
    category: 'Game',
    image: 'https://placehold.co/400x300/f2f2f2/666666?text=Game',
    description:
      'Trò chơi xây dựng thành phố mới hứa hẹn mang đến trải nghiệm độc đáo cho người chơi vào năm 2025.',
    likes: 142,
    commentsEnabled: true,
    sharesEnabled: true,
  },
];

function News() {
  const { id } = useParams();
  const newsItem = newsData.find((item) => item.id === parseInt(id));
  const [showComments, setShowComments] = useState(false); // State để hiển thị/ẩn CommentSection

  // Kiểm tra id và newsItem
  console.log('URL id:', id);
  console.log('Found newsItem:', newsItem);

  if (!newsItem) {
    return <div className="main-content">Tin tức không tồn tại</div>;
  }

  // Hàm xử lý nhấn nút "Bình luận"
  const handleCommentToggle = () => {
    console.log('Toggling comments, showComments:', !showComments);
    setShowComments(!showComments);
  };

  return (
    <div className="main-content">
      <div className="news-container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        <div className="news-item large">
          <div className="trending-tag">
            <i className="fas fa-fire"></i> Đang trending
          </div>
          <div className="news-image">
            <img src={newsItem.image} alt={newsItem.title} />
          </div>
          <div className="news-content">
            <div className="news-source">
              <div className="news-source-icon">{newsItem.source[0]}</div>
              {newsItem.source}
              <span className="news-timestamp">
                <i className="far fa-clock"></i> {newsItem.timestamp}
              </span>
            </div>
            <h3 className="news-title">{newsItem.title}</h3>
            <p className="news-description">{newsItem.description}</p>
            <div className="news-metadata">
              <div className="news-category">{newsItem.category}</div>
              <div className="news-actions">
                <button className="news-action-button">
                  <i className="far fa-thumbs-up"></i> {newsItem.likes}
                </button>
                {newsItem.commentsEnabled && (
                  <button className="news-action-button" onClick={handleCommentToggle}>
                    <i className="far fa-comment"></i> {showComments ? 'Ẩn bình luận' : 'Bình luận'}
                  </button>
                )}
                {newsItem.sharesEnabled && (
                  <button className="news-action-button">
                    <i className="far fa-share-square"></i> Chia sẻ
                  </button>
                )}
              </div>
            </div>
          </div>
          {newsItem.commentsEnabled && showComments && <CommentSection newsId={newsItem.id} />}
        </div>
        <WeatherForecast />
      </div>
    </div>
  );
}

export default News;