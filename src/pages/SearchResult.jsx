import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Dữ liệu mẫu để hiển thị
const newsData = [
  {
    id: 1,
    title: 'Quân đội Việt Nam tìm kiếm các nạn nhân động đất Myanmar trong đống đổ nát',
    source: 'VietnamPlus',
    timestamp: '6 giờ trước',
    category: 'Thời sự',
    image: 'https://placehold.co/800x500/0078d7/ffffff?text=Cứu+hộ+động+đất',
    description:
      'Đội cứu hộ quân đội Việt Nam đã được điều động sang Myanmar để hỗ trợ công tác tìm kiếm và cứu nạn sau trận động đất kinh hoàng xảy ra tuần trước...',
    likes: 327,
    publishDate: '2025-04-20',
    commentsEnabled: true,
    sharesEnabled: true,
  },
  {
    id: 2,
    title: '5 thói quen giúp Elon Musk thành tỷ phú',
    source: 'Ngôi sao',
    timestamp: '4 ngày trước',
    category: 'Doanh nhân',
    image: 'https://placehold.co/400x300/f2f2f2/666666?text=Elon+Musk',
    description:
      'Elon Musk đã chia sẻ về những thói quen giúp ông đạt được thành công vang dội trong kinh doanh và công nghệ.',
    likes: 128,
    publishDate: '2025-04-17',
    commentsEnabled: false,
    sharesEnabled: false,
  },
  {
    id: 3,
    title: 'Thủ tướng tiếp 20 đại học hàng đầu Mỹ, đề xuất hợp tác đào tạo nhân lực',
    source: 'Tuổi trẻ',
    timestamp: '22 giờ trước',
    category: 'Giáo dục',
    image: 'https://placehold.co/400x300/f2f2f2/666666?text=Đại+học',
    description:
      'Thủ tướng đã có buổi gặp gỡ với đại diện 20 trường đại học hàng đầu Mỹ để thảo luận về hợp tác giáo dục và phát triển nguồn nhân lực chất lượng cao cho Việt Nam.',
    likes: 75,
    publishDate: '2025-04-19',
    commentsEnabled: false,
    sharesEnabled: false,
  },
  {
    id: 4,
    title: 'Chính sách nổi bật có hiệu lực từ tháng 4/2025',
    source: 'VnExpress',
    timestamp: '14 giờ trước',
    category: 'Pháp luật',
    image: 'https://placehold.co/400x300/f2f2f2/666666?text=Chính+sách',
    description:
      'Một số chính sách mới sẽ có hiệu lực từ tháng 4, ảnh hưởng đến nhiều lĩnh vực trong đời sống xã hội.',
    likes: 87,
    publishDate: '2025-04-20',
    commentsEnabled: false,
    sharesEnabled: false,
  },
  {
    id: 5,
    title: '9 kiểu váy tối kỵ đối với phụ nữ tuổi 40',
    source: 'VTC News',
    timestamp: '5 ngày trước', 
    category: 'Thời trang',
    image: 'https://placehold.co/800x500/f2f2f2/666666?text=Thời+trang',
    description:
      'Phong cách thời trang của phụ nữ sau tuổi 40 nên chú trọng vào sự thanh lịch và tinh tế...',
    likes: 210,
    publishDate: '2025-04-16',
    commentsEnabled: true,
    sharesEnabled: false,
  },
  {
    id: 6,
    title: 'Game xây dựng thành phố 2025 - Trải nghiệm mới',
    source: 'Forge of Empires',
    timestamp: '3 giờ trước',
    category: 'Game',
    image: 'https://placehold.co/400x300/f2f2f2/666666?text=Game',
    description:
      'Trò chơi xây dựng thành phố mới hứa hẹn mang đến trải nghiệm độc đáo cho người chơi vào năm 2025.',
    likes: 142,
    publishDate: '2025-04-21',
    commentsEnabled: false,
    sharesEnabled: false,
  },
];

export default function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isAdvancedSearch = queryParams.get("advanced") === "true";
  
  // Lấy các tham số tìm kiếm từ URL
  const keySearch = queryParams.get("q") || "";
  const categorySearch = queryParams.get("category") || "";
  const contentSearch = queryParams.get("content") || "";
  const fromDateSearch = queryParams.get("fromDate") || "";
  const toDateSearch = queryParams.get("toDate") || "";
  
  // State cho form tìm kiếm nâng cao
  const [advancedSearch, setAdvancedSearch] = useState({
    category: categorySearch,
    content: contentSearch,
    fromDate: fromDateSearch,
    toDate: toDateSearch,
  });
  
  // State cho kết quả lọc
  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchSummary, setSearchSummary] = useState("");
  
  // Danh sách các chuyên mục
  const categories = [...new Set(newsData.map((item) => item.category))];

  // Xử lý thay đổi trong form tìm kiếm nâng cao
  const handleAdvancedSearchChange = (e) => {
    const { name, value } = e.target;
    setAdvancedSearch((prev) => ({ ...prev, [name]: value }));
  };

  // Xử lý submit form tìm kiếm nâng cao
  const handleAdvancedSearchSubmit = (e) => {
    e.preventDefault();
    
    // Xây dựng query string mới từ state
    let newQueryParams = new URLSearchParams();
    if (keySearch) {
      newQueryParams.append("q", keySearch);
    }
    if (advancedSearch.category) {
      newQueryParams.append("category", advancedSearch.category);
    }
    if (advancedSearch.content) {
      newQueryParams.append("content", advancedSearch.content);
    }
    if (advancedSearch.fromDate) {
      newQueryParams.append("fromDate", advancedSearch.fromDate);
    }
    if (advancedSearch.toDate) {
      newQueryParams.append("toDate", advancedSearch.toDate);
    }
    newQueryParams.append("advanced", "true");
    
    // Cập nhật URL không load lại trang
    window.history.replaceState(
      {}, 
      '', 
      `${window.location.pathname}?${newQueryParams.toString()}`
    );
    
    // Lọc lại tin tức
    filterNewsResults();
  };

  // Hàm tạo tóm tắt tìm kiếm
  const createSearchSummary = () => {
    let summary = [];
    
    if (keySearch) {
      summary.push(`từ khóa "${decodeURIComponent(keySearch)}"`);
    }
    
    if (categorySearch) {
      summary.push(`chuyên mục "${categorySearch}"`);
    }
    
    if (contentSearch) {
      summary.push(`nội dung có "${contentSearch}"`);
    }
    
    if (fromDateSearch && toDateSearch) {
      summary.push(`từ ngày ${fromDateSearch} đến ${toDateSearch}`);
    } else if (fromDateSearch) {
      summary.push(`từ ngày ${fromDateSearch}`);
    } else if (toDateSearch) {
      summary.push(`đến ngày ${toDateSearch}`);
    }
    
    if (summary.length === 0) {
      return "Tất cả tin tức";
    }
    
    return summary.join(", ");
  };

  // Hàm lọc tin tức dựa trên các tham số tìm kiếm
  const filterNewsResults = () => {
    setLoading(true);
    
    let results = [...newsData];
    
    // Lọc theo từ khóa tìm kiếm nhanh (tiêu đề và nội dung)
    if (keySearch) {
      const searchKey = decodeURIComponent(keySearch).toLowerCase();
      results = results.filter(
        (item) =>
          item.title.toLowerCase().includes(searchKey) ||
          item.description.toLowerCase().includes(searchKey)
      );
    }
    
    // Lọc theo chuyên mục
    if (categorySearch) {
      results = results.filter((item) =>
        item.category.toLowerCase() === categorySearch.toLowerCase()
      );
    }
    
    // Lọc theo nội dung chi tiết
    if (contentSearch) {
      const contentKey = contentSearch.toLowerCase();
      results = results.filter(
        (item) =>
          item.description.toLowerCase().includes(contentKey) ||
          item.title.toLowerCase().includes(contentKey)
      );
    }
    
    // Lọc theo khoảng thời gian
    if (fromDateSearch || toDateSearch) {
      results = results.filter((item) => {
        const publishDate = new Date(item.publishDate);
        
        if (fromDateSearch && toDateSearch) {
          const fromDate = new Date(fromDateSearch);
          const toDate = new Date(toDateSearch);
          return publishDate >= fromDate && publishDate <= toDate;
        } else if (fromDateSearch) {
          const fromDate = new Date(fromDateSearch);
          return publishDate >= fromDate;
        } else if (toDateSearch) {
          const toDate = new Date(toDateSearch);
          return publishDate <= toDate;
        }
        
        return true;
      });
    }
    
    // Cập nhật kết quả tìm kiếm
    setFilteredNews(results);
    
    // Tạo câu tóm tắt tìm kiếm
    setSearchSummary(createSearchSummary());
    
    setLoading(false);
  };

  // Lọc tin tức mỗi khi thay đổi tham số tìm kiếm
  useEffect(() => {
    filterNewsResults();
  }, [location.search]);

  return (
    <div className="main-content">
      <div className="news-container">
        <h2 className="section-title">
          Kết quả tìm kiếm {searchSummary && `cho ${searchSummary}`}
        </h2>
        
        {/* Form tìm kiếm nâng cao */}
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
        
        {/* Hiển thị số lượng kết quả */}
        <div className="text-sm text-gray-600 mb-4">
          Tìm thấy {filteredNews.length} kết quả
        </div>
        
        {/* Hiển thị kết quả tìm kiếm */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
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