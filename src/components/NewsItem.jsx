function NewsItem({ news, large = false }) {
    return (
      <div className={`news-item ${large ? 'large' : ''}`}>
        <div className="news-image">
          <img src={news.image} alt={news.title} />
        </div>
        <div className="news-content">
          <div className="news-source">
            <div className="news-source-icon">{news.source[0]}</div>
            {news.source}
            <span className="news-timestamp">{news.timestamp}</span>
          </div>
          <h3 className="news-title">{news.title}</h3>
          {large && <p className="news-description">{news.description}</p>}
          <div className="news-metadata">
            <div className="news-category">{news.category}</div>
            <div className="news-actions">
              <button className="news-action-button">
                <i className="far fa-thumbs-up"></i> {news.likes}
              </button>
              {news.commentsEnabled && (
                <button className="news-action-button">
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