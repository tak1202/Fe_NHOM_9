function SearchBar() {
    return (
      <div className="search-container">
        <div className="search-box">
          <i className="fas fa-search" style={{ color: '#888' }}></i>
          <input
            type="text"
            className="search-input"
            placeholder="Tìm kiếm tin tức, xu hướng, sự kiện..."
          />
          <button className="icon-button" style={{ color: '#0078d7' }}>
            <i className="fas fa-microphone"></i>
          </button>
          <button className="icon-button" style={{ color: '#0078d7' }}>
            <i className="fas fa-camera"></i>
          </button>
        </div>
      </div>
    );
  }
  
  export default SearchBar;