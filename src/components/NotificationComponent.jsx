import { useState, useRef, useEffect } from 'react';

const NotificationComponent = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);

  const notifications = [
    {
      id: 1,
      category: "Góc nhìn",
      title: "Ai cứu bác sĩ?",
      time: "26' trước"
    },
    {
      id: 2,
      category: "Giáo dục",
      title: "Khiển trách nam sinh vô lễ trong lễ điều bình 30/4",
      time: "31' trước"
    },
    {
      id: 3,
      category: "Xe",
      title: "Ôtô dừng chờ quá vạch bị phạt 18-20 triệu đồng như vượt đèn đỏ",
      time: "58' trước"
    },
    {
      id: 4,
      category: "Thể thao",
      title: "Man Utd vào chung kết Europa League",
      time: "2h trước"
    },
    {
      id: 5,
      category: "Thế giới",
      title: "Tân Giáo hoàng Leo XIV ra mắt",
      time: "8h trước"
    },
    {
      id: 6,
      category: "Thế giới",
      title: "",
      time: "9h trước"
    }
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notificationRef]);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="relative" ref={notificationRef}>
      <button 
        className="icon-button" 
        onClick={toggleNotifications}
      >
        <i className="fas fa-bell"></i>
      </button>
      
      {showNotifications && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden border border-gray-200 z-50">
          <div className="p-10">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center font-medium mb-2">
              <i className="fas fa-bell mr-2"></i>
              Bật nhận thông báo
            </button>
            
            <div className="mt-2">
              {notifications.map(notification => (
                <div key={notification.id} className="py-10 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                  <div className="text-gray-500 text-xs mb-1">{notification.category}</div>
                  <div className="font-medium text-sm mb-1">{notification.title}</div>
                  <div className="text-gray-400 text-xs text-right">{notification.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationComponent;