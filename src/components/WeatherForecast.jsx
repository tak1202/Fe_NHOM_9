function WeatherForecast() {
    return (
      <div className="weather-section">
        <div className="weather-header">
          <div className="weather-location"><i className="fas fa-map-marker-alt"></i> Tân Thuận Đông</div>
          <button className="icon-button" style={{ color: 'white' }}><i className="fas fa-ellipsis-h"></i></button>
        </div>
        <div className="weather-current">
          <div className="weather-icon"><i className="fas fa-sun"></i></div>
          <div className="weather-temp">31°C</div>
          <div className="weather-condition">
            <div>Có mây</div>
            <div><i className="fas fa-tint"></i> Mưa sắp tạnh</div>
            <div><i className="fas fa-wind"></i> Gió 12 km/h</div>
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
            <div><i className="fas fa-sun"></i></div>
            <div className="forecast-temp">33°</div>
            <div className="forecast-min">25°</div>
          </div>
          <div className="forecast-day">
            <div className="forecast-date">T4</div>
            <div><i className="fas fa-cloud-rain"></i></div>
            <div className="forecast-temp">32°</div>
            <div className="forecast-min">26°</div>
          </div>
          <div className="forecast-day">
            <div className="forecast-date">T5</div>
            <div><i className="fas fa-cloud-sun"></i></div>
            <div className="forecast-temp">34°</div>
            <div className="forecast-min">26°</div>
          </div>
          <div className="forecast-day">
            <div className="forecast-date">T6</div>
            <div><i className="fas fa-cloud-sun"></i></div>
            <div className="forecast-temp">34°</div>
            <div className="forecast-min">26°</div>
          </div>
          <div className="forecast-day">
            <div className="forecast-date">T7</div>
            <div><i className="fas fa-cloud-sun"></i></div>
            <div className="forecast-temp">34°</div>
            <div className="forecast-min">26°</div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Xem dự báo đầy đủ <i className="fas fa-angle-right"></i></a>
        </div>
      </div>
    );
  }
  
  export default WeatherForecast;