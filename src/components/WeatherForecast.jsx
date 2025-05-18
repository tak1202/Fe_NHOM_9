import { useState, useEffect } from 'react';
import axios from 'axios';

function WeatherForecast() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Thay bằng API key của bạn
        const lat = 10.7333; // Tân Thuận Đông, TP.HCM
        const lon = 106.7333;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&lang=vi&appid=${apiKey}`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Lỗi khi lấy dữ liệu thời tiết:', err);
        setError('Không thể tải dữ liệu thời tiết. Vui lòng thử lại sau.');
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  if (loading) {
    return <div className="weather-section">Đang tải thời tiết...</div>;
  }

  if (error || !weatherData) {
    return <div className="weather-section">{error}</div>;
  }

  const current = weatherData.current;
  const forecast = weatherData.daily.slice(0, 5); // Lấy dự báo 5 ngày
  const airQuality = current.uvi <= 2 ? 'Tốt' : current.uvi <= 5 ? 'Trung bình' : 'Kém'; // Đơn giản hóa AQI

  return (
    <div className="weather-section">
      <div className="weather-header">
        <div className="weather-location"><i className="fas fa-map-marker-alt"></i> Tân Thuận Đông</div>
        <button className="icon-button" style={{ color: 'white' }}><i className="fas fa-ellipsis-h"></i></button>
      </div>
      <div className="weather-current">
        <div className="weather-icon">
          <i className={`fas ${current.weather[0].main === 'Clear' ? 'fa-sun' : 'fa-cloud'}`}></i>
        </div>
        <div className="weather-temp">{Math.round(current.temp)}°C</div>
        <div className="weather-condition">
          <div>{current.weather[0].description}</div>
          <div><i className="fas fa-tint"></i> Độ ẩm {current.humidity}%</div>
          <div><i className="fas fa-wind"></i> Gió {Math.round(current.wind_speed * 3.6)} km/h</div>
        </div>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div>Chất lượng không khí</div>
          <div style={{ color: airQuality === 'Tốt' ? '#4cd964' : '#ff9500', fontWeight: '600' }}>{airQuality}</div>
        </div>
        <div style={{ height: '5px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px', marginBottom: '20px' }}>
          <div style={{ height: '100%', width: `${current.uvi * 10}%`, background: '#4cd964', borderRadius: '3px' }}></div>
        </div>
      </div>
      <div className="weather-forecast">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <div className="forecast-date">{index === 0 ? 'H.nay' : new Date(day.dt * 1000).toLocaleDateString('vi', { weekday: 'short' })}</div>
            <div><i className={`fas ${day.weather[0].main === 'Clear' ? 'fa-sun' : 'fa-cloud'}`}></i></div>
            <div className="forecast-temp">{Math.round(day.temp.max)}°</div>
            <div className="forecast-min">{Math.round(day.temp.min)}°</div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Xem dự báo đầy đủ <i className="fas fa-angle-right"></i></a>
      </div>
    </div>
  );
}

export default WeatherForecast;