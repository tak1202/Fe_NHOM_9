import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CommentSection from './CommentSection'; // Bỏ comment import
import { useFetchData } from '../hooks/useFetchData';

function News() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log('News ID:', id); // Debug ID từ URL
  const { data: newsData, fetchData: fetchNewsData, isLoading, error } = useFetchData(`tin/${id}`);
  const [newsItem, setNewsItem] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const { data: commentsData, fetchData: fetchCommentsData, isLoading: commentsLoading, error: commentsError } = useFetchData(`tin/${id}/binh-luan`, false);

  useEffect(() => {
    fetchNewsData();
  }, [id]);

  useEffect(() => {
    console.log('Data from API:', newsData); // Debug dữ liệu từ API
    if (newsData) {
      const formattedItem = {
        id: newsData.id || newsData._id || '',
        title: newsData.tieu_de || 'Không có tiêu đề',
        source: newsData.tac_gia || 'Nguồn không xác định',
        timestamp: newsData.ngay_dang_tin || newsData.created_at || 'Thời gian không xác định',
        category: newsData.loai_tin?.ten_loai_tin || 'Tổng hợp',
        image: 'https://cdnmedia.baotintuc.vn/Upload/3qVxwVtNEPp6Wp9kkF77g/files/2024/03/30/kinh-te-300324-a.jpg',
        description: newsData.mo_ta || 'Không có mô tả',
        content: newsData.noi_dung || 'Không có nội dung',
        likes: newsData.so_lan_xem || 0,
        commentsEnabled: newsData.trang_thai !== false,
        sharesEnabled: true,
        hot: newsData.tin_hot || false,
      };
      console.log('Formatted newsItem:', formattedItem); // Debug dữ liệu sau định dạng
      setNewsItem(formattedItem);
    }
  }, [newsData]);

  const handleCommentToggle = () => {
    if (!showComments && newsItem && newsItem.commentsEnabled) {
      console.log('Calling fetchCommentsData for API:', `https://apiwebnews.onrender.com/api/tin/${id}/binh-luan`); // Debug
      fetchCommentsData(); // Gọi fetchData cho bình luận
    }
    setShowComments(!showComments);
  };

  if (isLoading) {
    return <div className="main-content">Đang tải tin tức...</div>;
  }

  if (error) {
    return <div className="main-content">Lỗi: {error}</div>;
  }

  if (newsItem === null || !newsItem.id) {
    return <div className="main-content">Tin tức không tồn tại hoặc không tải được</div>;
  }

  return (
    <div className="main-content">
      <div className="news-container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        <div className="news-item large">
          {newsItem.hot && (
            <div className="trending-tag">
              <i className="fas fa-fire"></i> Đang trending
            </div>
          )}
          <div className="news-image">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              onError={(e) => {
                e.target.src = 'https://placehold.co/800x500/0078d7/ffffff?text=Hình+không+tải+được';
              }}
            />
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
            <div className="news-content-full" dangerouslySetInnerHTML={{ __html: newsItem.content }} />
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
          {newsItem.commentsEnabled && showComments && (
            <CommentSection
              newsId={newsItem.id}
              autoFetch={false} // Không tự động fetch, đã gọi fetchCommentsData trong handleCommentToggle
              commentsData={commentsData}
              isLoading={commentsLoading}
              error={commentsError}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default News;