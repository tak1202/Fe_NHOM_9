import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isAdvancedSearch = queryParams.get('advanced') === 'true';

  const keySearch = queryParams.get('q') || '';
  const categorySearch = queryParams.get('category') || '';
  const contentSearch = queryParams.get('content') || '';
  const fromDateSearch = queryParams.get('fromDate') || '';
  const toDateSearch = queryParams.get('toDate') || '';

  const [advancedSearch, setAdvancedSearch] = useState({
    category: categorySearch,
    content: contentSearch,
    fromDate: fromDateSearch,
    toDate: toDateSearch,
  });
  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchSummary, setSearchSummary] = useState('');

  const categories = ['Thời sự', 'Doanh nhân', 'Giáo dục', 'Pháp luật', 'Thời trang', 'Game']; // Cập nhật từ API nếu cần

  const handleAdvancedSearchChange = (e) => {
    const { name, value } = e.target;
    setAdvancedSearch((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdvancedSearchSubmit = (e) => {
    e.preventDefault();
    let newQueryParams = new URLSearchParams();
    if (keySearch) newQueryParams.append('q', keySearch);
    if (advancedSearch.category) newQueryParams.append('category', advancedSearch.category);
    if (advancedSearch.content) newQueryParams.append('content', advancedSearch.content);
    if (advancedSearch.fromDate) newQueryParams.append('fromDate', advancedSearch.fromDate);
    if (advancedSearch.toDate) newQueryParams.append('toDate', advancedSearch.toDate);
    newQueryParams.append('advanced', 'true');
    window.history.replaceState({}, '', `${window.location.pathname}?${newQueryParams.toString()}`);
    fetchNewsResults();
  };

  const createSearchSummary = () => {
    let summary = [];
    if (keySearch) summary.push(`từ khóa "${decodeURIComponent(keySearch)}"`);
    if (categorySearch) summary.push(`chuyên mục "${categorySearch}"`);
    if (contentSearch) summary.push(`nội dung có "${contentSearch}"`);
    if (fromDateSearch && toDateSearch) summary.push(`từ ngày ${fromDateSearch} đến ${toDateSearch}`);
    else if (fromDateSearch) summary.push(`từ ngày ${fromDateSearch}`);
    else if (toDateSearch) summary.push(`đến ngày ${toDateSearch}`);
    return summary.length === 0 ? 'Tất cả tin tức' : summary.join(', ');
  };

  const fetchNewsResults = async () => {
    setLoading(true);
    try {
      let url = 'https://apiwebnews.onrender.com/api/news/search?';
      const params = new URLSearchParams();
      if (keySearch) params.append('q', decodeURIComponent(keySearch));
      if (categorySearch) params.append('category', categorySearch);
      if (contentSearch) params.append('content', contentSearch);
      if (fromDateSearch) params.append('fromDate', fromDateSearch);
      if (toDateSearch) params.append('toDate', toDateSearch);
      url += params.toString();

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Lỗi HTTP! Trạng thái: ${response.status}`);
      }
      const data = await response.json();
      const formattedData = data.map(item => ({
        id: item.id || item._id,
        title: item.title,
        source: item.source || 'Nguồn không xác định',
        timestamp: item.timestamp || item.createdAt || 'Thời gian không xác định',
        category: item.category || 'Tổng hợp',
        image: item.image || 'https://placehold.co/400x300/0078d7/ffffff?text=Hình+tin+tức',
        description: item.description || 'Không có mô tả',
        likes: item.likes || 0,
        publishDate: item.publishDate || item.createdAt,
        commentsEnabled: item.commentsEnabled !== false,
        sharesEnabled: item.sharesEnabled !== false,
      }));
      setFilteredNews(formattedData);
      setSearchSummary(createSearchSummary());
      setLoading(false);
    } catch (err) {
      console.error('Lỗi khi tìm kiếm:', err);
      setError('Không thể tải kết quả tìm kiếm. Vui lòng thử lại sau.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsResults();
  }, [location.search]);

  return (
    <div className="main-content">
      <div className="news-container">
        <h2 className="section-title">
          Kết quả tìm kiếm {searchSummary && `cho ${searchSummary}`}
        </h2>
        <div className="mb-6 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                >
                  <option value="">Tất cả chuyên mục</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 shadow-md"
              >
                Áp dụng bộ lọc
              </button>
            </div>
          </form>
        </div>
        <div className="text-sm text-gray-600 mb-4">
          Tìm thấy {filteredNews.length} kết quả
        </div>
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : error ? (
          <div className="bg-gray-50 border border-gray-200 text-center text-gray-600 p-12 rounded-lg">
            <p className="text-xl">{error}</p>
          </div>
        ) : filteredNews.length > 0 ? (
          <div className="news-grid">
            {filteredNews.map((item) => (
              <Link to={`/news/${item.id}`} key={item.id} className="news-item">
                <div className="news-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="news-content">
                  <div className="news-source">
                    <div className="news-source-icon">{item.source[0]}</div>
                    {item.source}
                    <span className="news-timestamp">
                      <i className="far fa-clock"></i> {item.timestamp}
                    </span>
                  </div>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-description">{item.description}</p>
                  <div className="news-metadata">
                    <div className="news-category">{item.category}</div>
                    <div className="news-actions">
                      <button className="news-action-button">
                        <i className="far fa-thumbs-up"></i> {item.likes}
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 border border-gray-200 text-center text-gray-600 p-12 rounded-lg">
            <i className="fas fa-search mb-4 text-3xl opacity-50"></i>
            <p className="text-xl">Không tìm thấy kết quả nào phù hợp</p>
            <p className="mt-2">Vui lòng thử lại với từ khóa khác hoặc điều chỉnh bộ lọc tìm kiếm</p>
          </div>
        )}
      </div>
    </div>
  );
}