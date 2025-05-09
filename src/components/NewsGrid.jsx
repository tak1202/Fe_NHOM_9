function NewsGrid() {
    return (
      <div className="news-grid">
        <div className="news-item large">
          <div className="trending-tag">
            <i className="fas fa-fire"></i> Đang trending
          </div>
          <div className="news-image">
            <img
              src="https://placehold.co/800x500/0078d7/ffffff?text=Cứu+hộ+động+đất"
              alt="Tin tức chính"
            />
          </div>
          <div className="news-content">
            <div className="news-source">
              <div className="news-source-icon">V</div>
              VietnamPlus
              <span className="news-timestamp">
                <i className="far fa-clock"></i> 6 giờ trước
              </span>
            </div>
            <h3 className="news-title">
              Quân đội Việt Nam tìm kiếm các nạn nhân động đất Myanmar trong đống đổ nát
            </h3>
            <p className="news-description">
              Đội cứu hộ quân đội Việt Nam đã được điều động sang Myanmar để hỗ trợ công tác tìm kiếm và cứu nạn sau trận động đất kinh hoàng xảy ra tuần trước. Các đội cứu hộ đang làm việc không mệt mỏi ngày đêm để tìm kiếm những người còn sống sót trong các đống đổ nát, thể hiện tinh thần đoàn kết quốc tế trong thời khắc khó khăn.
            </p>
            <div className="news-metadata">
              <div className="news-category">Thời sự</div>
              <div className="news-actions">
                <button className="news-action-button">
                  <i className="far fa-thumbs-up"></i> 327
                </button>
                <button className="news-action-button">
                  <i className="far fa-comment"></i> Bình luận
                </button>
                <button className="news-action-button">
                  <i className="far fa-share-square"></i> Chia sẻ
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <div className="weather-section">
          <div className="weather-header">
            <div className="weather-location">
              <i className="fas fa-map-marker-alt"></i> Tân Thuận Đông
            </div>
            <button className="icon-button" style={{ color: 'white' }}>
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
          <div className="weather-current">
            <div className="weather-icon">
              <i className="fas fa-sun"></i>
            </div>
            <div className="weather-temp">31°C</div>
            <div className="weather-condition">
              <div>Có mây</div>
              <div>
                <i className="fas fa-tint"></i> Mưa sắp tạnh
              </div>
              <div>
                <i className="fas fa-wind"></i> Gió 12 km/h
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div>Chất lượng không khí</div>
              <div style={{ color: '#4cd964', fontWeight: '600' }}>Tốt</div>
            </div>
            <div style={{ height: '5px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px', marginBottom: '20px' }}>
              <div style={{ height: '100%', width: '30%', background: '#4cd964', borderRadius: '3px' }}></div>
            </div>
          </div>
          <div className="weather-forecast">
            <div className="forecast-day">
              <div className="forecast-date">H.nay</div>
              <div>
                <i className="fas fa-sun"></i>
              </div>
              <div className="forecast-temp">33°</div>
              <div className="forecast-min">25°</div>
            </div>
            <div className="forecast-day">
              <div className="forecast-date">T4</div>
              <div>
                <i className="fas fa-cloud-rain"></i>
              </div>
              <div className="forecast-temp">32°</div>
              <div className="forecast-min">26°</div>
            </div>
            <div className="forecast-day">
              <div className="forecast-date">T5</div>
              <div>
                <i className="fas fa-cloud-sun"></i>
              </div>
              <div className="forecast-temp">34°</div>
              <div className="forecast-min">26°</div>
            </div>
            <div className="forecast-day">
              <div className="forecast-date">T6</div>
              <div>
                <i className="fas fa-cloud-sun"></i>
              </div>
              <div className="forecast-temp">34°</div>
              <div className="forecast-min">26°</div>
            </div>
            <div className="forecast-day">
              <div className="forecast-date">T7</div>
              <div>
                <i className="fas fa-cloud-sun"></i>
              </div>
              <div className="forecast-temp">34°</div>
              <div className="forecast-min">26°</div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px' }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
              Xem dự báo đầy đủ <i className="fas fa-angle-right"></i>
            </a>
          </div>
        </div>
  
        <div className="news-item">
          <div className="news-image">
            <img src="https://placehold.co/400x300/f2f2f2/666666?text=Elon+Musk" alt="Elon Musk" />
          </div>
          <div className="news-content">
            <div className="news-source">
              <div className="news-source-icon">N</div>
              Ngôi sao
              <span className="news-timestamp">4 ngày trước</span>
            </div>
            <h3 className="news-title">5 thói quen giúp Elon Musk thành tỷ phú</h3>
            <div className="news-metadata">
              <div className="news-category">Doanh nhân</div>
              <div className="news-actions">
                <button className="news-action-button">
                  <i className="far fa-thumbs-up"></i> 128
                </button>
                <button className="news-action-button">
                  <i className="far fa-comment"></i> Bình luận
                </button>
                <button className="news-action-button">
                  <i className="far fa-share-square"></i> Chia sẻ
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <div className="news-item">
          <div className="news-image">
            <img src="https://placehold.co/400x300/f2f2f2/666666?text=Đại+học" alt="Đại học" />
          </div>
          <div className="news-content">
            <div className="news-source">
              <div className="news-source-icon">T</div>
              Tuổi trẻ
              <span className="news-timestamp">22 giờ trước</span>
            </div>
            <h3 className="news-title">
              Thủ tướng tiếp 20 đại học hàng đầu Mỹ, đề xuất hợp tác đào tạo nhân lực
            </h3>
            <div className="news-metadata">
              <div className="news-category">Giáo dục</div>
              <div className="news-actions">
                <button className="news-action-button">
                  <i className="far fa-thumbs-up"></i> 75
                </button>
                <button className="news-action-button">
                  <i className="far fa-comment"></i> Bình luận
                </button>
                <button className="news-action-button">
                  <i className="far fa-share-square"></i> Chia sẻ
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <div className="news-item">
          <div className="news-image">
            <img src="https://placehold.co/400x300/f2f2f2/666666?text=Chính+sách" alt="Chính sách" />
          </div>
          <div className="news-content">
            <div className="news-source">
              <div className="news-source-icon">V</div>
              VnExpress
              <span className="news-timestamp">14 giờ trước</span>
            </div>
            <h3 className="news-title">Chính sách nổi bật có hiệu lực từ tháng 4</h3>
            <div className="news-metadata">
              <div className="news-category">Pháp luật</div>
              <div className="news-actions">
                <button className="news-action-button">
                  <i className="far fa-thumbs-up"></i> 87
                </button>
                <button className="news-action-button">
                  <i className="far fa-comment"></i> Bình luận
                </button>
                <button className="news-action-button">
                  <i className="far fa-share-square"></i> Chia sẻ
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <div className="news-item large">
          <div className="news-image">
            <img src="https://placehold.co/800x500/f2f2f2/666666?text=Thời+trang" alt="Thời trang" />
          </div>
          <div className="news-content">
            <div className="news-source">
              <div className="news-source-icon">V</div>
              VTC News
              <span className="news-timestamp">5 ngày trước</span>
            </div>
            <h3 className="news-title">9 kiểu váy tối kỵ đối với phụ nữ tuổi 40</h3>
            <p className="news-description">
              Phong cách thời trang của phụ nữ sau tuổi 40 nên chú trọng vào sự thanh lịch và tinh tế. Những kiểu váy quá ngắn, quá rườm rà, hay thiếu đi sự trang nhã thường không phù hợp và làm giảm vẻ đẹp tự nhiên của độ tuổi này.
            </p>
            <div className="news-metadata">
              <div className="news-category">Thời trang</div>
              <div className="news-actions">
                <button className="news-action-button">
                  <i className="far fa-thumbs-up"></i> 210
                </button>
                <button className="news-action-button">
                  <i className="far fa-comment"></i> Bình luận
                </button>
                <button className="news-action-button">
                  <i className="far fa-share-square"></i> Chia sẻ
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <div className="news-item">
          <div className="news-image">
            <img src="https://placehold.co/400x300/f2f2f2/666666?text=Game" alt="Game" />
          </div>
          <div className="news-content">
            <div className="news-source">
              <div className="news-source-icon">F</div>
              Forge of Empires
              <span className="news-timestamp">3 giờ trước</span>
            </div>
            <h3 className="news-title">Game xây dựng thành phố 2025 - Trải nghiệm mới</h3>
            <div className="news-metadata">
              <div className="news-category">Game</div>
              <div className="news-actions">
                <button className="news-action-button">
                  <i className="far fa-thumbs-up"></i> 142
                </button>
                <button className="news-action-button">
                  <i className="far fa-comment"></i> Bình luận
                </button>
                <button className="news-action-button">
                  <i className="far fa-share-square"></i> Chia sẻ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default NewsGrid;