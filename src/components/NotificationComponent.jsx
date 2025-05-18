import { useState, useRef, useEffect } from 'react';

const NotificationComponent = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const notificationRef = useRef(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://apiwebnews.onrender.com');
        if (!response.ok) {
          throw new Error(`Lỗi HTTP! Trạng thái: ${response.status}`);
        }
        const data = await response.json();
        const formattedData = data.map(item => ({
          id: item.id || item._id,
          category: item.category || 'Tổng hợp',
          title: item.title || 'Không có tiêu đề',
          time: item.time || item.createdAt || 'Vừa xong',
        }));
        setNotifications(formattedData);
        setLoading(false);
      } catch (err) {
        console.error('Lỗi khi lấy thông báo:', err);
        setError('Không thể tải thông báo. Vui lòng thử lại sau.');
        setLoading(false);
      }
    };
    fetchNotifications();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="relative" ref={notificationRef}>
      <button className="icon-button" onClick={toggleNotifications}>
        <i className="fas fa-bell"></i>
      </button>
      {showNotifications && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden border border-gray-200 z-50">
          <div className="p-4">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center font-medium mb-2">
              <i className="fas fa-bell mr-2"></i>
              Bật nhận thông báo
            </button>
            <div className="mt-2">
              {loading ? (
                <div className="text-center text-gray-500 py-4">Đang tải thông báo...</div>
              ) : error ? (
                <div className="text-center text-red-500 py-4">{error}</div>
              ) : notifications.length === 0 ? (
                <div className="text-center text-gray-500 py-4">Không có thông báo</div>
              ) : (
                notifications.map(notification => (
                  <div key={notification.id} className="py-2 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                    <div className="text-gray-500 text-xs mb-1">{notification.category}</div>
                    <div className="font-medium text-sm mb-1">{notification.title}</div>
                    <div className="text-gray-400 text-xs text-right">{notification.time}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationComponent;