import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchKey, setSearchKey] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [advancedSearch, setAdvancedSearch] = useState({
    category: "",
    content: "",
    fromDate: "",
    toDate: ""
  });
  const navigate = useNavigate();

  const categories = [
    "Thời sự", "Doanh nhân", "Giáo dục", "Pháp luật", "Thời trang", "Game", "Thể thao", "Công nghệ"
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchKey.trim()) {
      // Chỉ thực hiện tìm kiếm nhanh
      navigate(`/search?q=${encodeURIComponent(searchKey)}`);
    }
  };

  const handleAdvancedSearchSubmit = (e) => {
    e.preventDefault();
    
    // Xây dựng query string từ các tiêu chí tìm kiếm nâng cao
    let queryParams = new URLSearchParams();
    
    // Thêm từ khóa tìm kiếm (nếu có)
    if (searchKey.trim()) {
      queryParams.append("q", searchKey);
    }
    
    // Thêm các tiêu chí tìm kiếm nâng cao
    if (advancedSearch.category) {
      queryParams.append("category", advancedSearch.category);
    }
    if (advancedSearch.content) {
      queryParams.append("content", advancedSearch.content);
    }
    if (advancedSearch.fromDate) {
      queryParams.append("fromDate", advancedSearch.fromDate);
    }
    if (advancedSearch.toDate) {
      queryParams.append("toDate", advancedSearch.toDate);
    }
    
    // Chuyển hướng đến trang kết quả tìm kiếm với các tham số
    navigate(`/search?${queryParams.toString()}&advanced=true`);
  };

  const handleAdvancedSearchChange = (e) => {
    const { name, value } = e.target;
    setAdvancedSearch(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearchSubmit} className="search-box">
        <i className="fas fa-search" style={{ color: '#888', marginRight: '10px' }}></i>
        <input
          type="text"
          className="search-input"
          placeholder="Tìm kiếm tin tức, xu hướng, sự kiện..."
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button type="submit" className="icon-button" style={{ color: '#0078d7' }}>
          <i className="fas fa-search"></i>
        </button>
        <button type="button" className="icon-button" style={{ color: '#0078d7' }}>
          <i className="fas fa-microphone"></i>
        </button>
        <button type="button" className="icon-button" style={{ color: '#0078d7' }}>
          <i className="fas fa-camera"></i>
        </button>
        <button 
          type="button" 
          className="icon-button" 
          style={{ color: showAdvanced ? '#0078d7' : '#888' }}
          onClick={() => setShowAdvanced(prev => !prev)}
        >
          <i className="fas fa-sliders-h"></i>
        </button>
      </form>

      {showAdvanced && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Tìm kiếm nâng cao</h3>
          <form onSubmit={handleAdvancedSearchSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Chuyên mục
                </label>
                <select
                  id="category"
                  name="category"
                  value={advancedSearch.category}
                  onChange={handleAdvancedSearchChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                >
                  <option value="">Tất cả chuyên mục</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  Nội dung
                </label>
                <input
                  id="content"
                  name="content"
                  type="text"
                  value={advancedSearch.content}
                  onChange={handleAdvancedSearchChange}
                  placeholder="Nhập từ khóa nội dung chi tiết..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fromDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Từ ngày
                </label>
                <input
                  id="fromDate"
                  name="fromDate"
                  type="date"
                  value={advancedSearch.fromDate}
                  onChange={handleAdvancedSearchChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="toDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Đến ngày
                </label>
                <input
                  id="toDate"
                  name="toDate"
                  type="date"
                  value={advancedSearch.toDate}
                  onChange={handleAdvancedSearchChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowAdvanced(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
              >
                Tìm kiếm nâng cao
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default SearchBar;