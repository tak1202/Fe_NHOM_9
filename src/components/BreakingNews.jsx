function BreakingNews() {
  // Dữ liệu tĩnh (có thể thay đổi theo ý muốn)
  const staticBreakingNews = [
    { id: 1, title: 'Sự kiện quan trọng hôm nay' },
    { id: 2, title: 'Thời tiết bất thường tại Việt Nam' },
    { id: 3, title: 'Tin tức kinh tế mới nhất' },
  ];

  return (
    <div className="breaking-news">
      <div className="breaking-label">Tin nóng</div>
      <div className="breaking-content" style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div className="breaking-title" style={{
          display: 'inline-block',
          animation: 'marquee 20s linear infinite',
        }}>
          {staticBreakingNews.map((news, index) => (
            <span key={news.id}>
              {news.title}
              {index < staticBreakingNews.length - 1 && ' • '}
            </span>
          ))}
        </div>
      </div>

      {/* Thêm CSS cho hiệu ứng marquee */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .breaking-title:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
}

export default BreakingNews;