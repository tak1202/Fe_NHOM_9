import { useNavigate } from 'react-router-dom';

function NewsItem({ news, large = false }) { // Đổi từ tin thành news
  const navigate = useNavigate();

  const handleNewsClick = () => {
    console.log('Navigating to:', `/tin/${news.id}`);
    navigate(`/tin/${news.id}`);
  };

  const handleCommentClick = () => {
    console.log('Comment button clicked, navigating to:', `/tin/${news.id}`);
    navigate(`/tin/${news.id}`);
  };

  if (!news || !news.id) {
    console.error('Error: news prop is undefined or missing id', news);
    return <div>Error: No news data</div>;
  }

  return (
    <div className={`news-item ${large ? 'large' : ''}`} onClick={handleNewsClick} style={{ cursor: 'pointer' }}>
      <div className="news-image">
        <img
          src={news.image}
          alt={news.title}
          onError={(e) => {
            e.target.src = 'https://placehold.co/400x300/0078d7/ffffff?text=Hình+không+tải+được';
          }}
        />
      </div>
      <div className="news-content">
        <div className="news-source">
          <div className="news-source-icon">
            {news.source && typeof news.source === 'string' && news.source.length > 0 ? news.source[0] : 'N'}
          </div>
          {news.source || 'Nguồn không xác định'}
          <span className="news-timestamp">{news.timestamp}</span>
        </div>
        <h3 className="news-title">{news.title}</h3>
        {large && <p className="news-description">{news.description}</p>}
        <div className="news-metadata">
          <div className="news-category">{news.category}</div>
          <div className="news-actions">
            <button className="news-action-button">
              <i className="far fa-thumbs-up"></i> {news.likes || 0}
            </button>
            {news.commentsEnabled && (
              <button
                className="news-action-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCommentClick();
                }}
                style={{ position: 'relative', zIndex: 1000 }}
              >
                <i className="far fa-comment"></i> Bình luận
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;