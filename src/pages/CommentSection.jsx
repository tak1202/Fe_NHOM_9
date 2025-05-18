import { useState, useEffect, useImperativeHandle, forwardRef } from "react";

const CommentSection = forwardRef(({ newsId, autoFetch, commentsData, isLoading, error }, ref) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(""); // State để lưu nội dung bình luận mới

  useEffect(() => {
    console.log("CommentSection newsId:", newsId);
    console.log("Comments data from props:", commentsData);
    if (commentsData && commentsData.length > 0) {
      const formattedData = commentsData.map((item) => ({
        id: item.id || item._id,
        author: item.email?.split("@")[0] || "Người dùng",
        avatar: item.email?.split("@")[0]?.[0] || "N",
        content: item.noi_dung || "Không có nội dung",
        timestamp: item.thoi_gian || item.created_at || "Vừa xong",
        likes: item.so_lan_xem || 0,
        replies: [],
      }));
      console.log("Formatted comments:", formattedData);
      setComments(formattedData);
    } else {
      console.log("No data or empty array");
      setComments([]);
    }
  }, [commentsData, newsId]);

  // Hàm xử lý khi người dùng gửi bình luận
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return; // Không gửi nếu bình luận rỗng

    const newCommentData = {
      id: Date.now(), // Tạm dùng timestamp làm id
      author: "Người dùng", // Thay bằng thông tin thực tế nếu có
      avatar: "N", // Thay bằng thông tin thực tế nếu có
      content: newComment,
      timestamp: "Vừa xong",
      likes: 0,
      replies: [],
    };

    setComments([newCommentData, ...comments]); // Thêm bình luận mới vào đầu danh sách
    setNewComment(""); // Xóa nội dung khung nhập sau khi gửi
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-[0_5px_20px_rgba(0,0,0,0.05)] p-6">
      <h3 className="text-xl font-semibold text-[#333] mb-4 border-b border-[#eee] pb-2 relative">
        Bình luận
        <span className="absolute bottom-[-1px] left-0 w-16 h-[3px] bg-gradient-to-r from-[#0078d7] to-[#00a1ff] rounded"></span>
      </h3>
      
      {/* Khung nhập bình luận */}
      <form onSubmit={handleCommentSubmit} className="mb-6 flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-[#f0f7ff] flex items-center justify-center font-medium text-[#0078d7]">
          N
        </div>
        <div className="flex-1">
          <textarea
            className="w-full p-3 border border-[#eee] rounded-lg focus:outline-none focus:border-[#0078d7] transition duration-200"
            rows="2"
            placeholder="Viết bình luận của bạn..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-[#0078d7] text-white rounded-lg hover:bg-[#005bb5] transition duration-200"
          >
            Đăng bình luận
          </button>
        </div>
      </form>

      {isLoading ? (
        <p>Đang tải bình luận...</p>
      ) : error ? (
        <p>{error}</p>
      ) : comments.length === 0 ? (
        <p>Không có bình luận nào.</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="border-b border-[#eee] pb-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f0f7ff] flex items-center justify-center font-medium text-[#0078d7]">
                  {comment.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[#333]">{comment.author}</span>
                    <span className="text-gray-500 text-sm">{comment.timestamp}</span>
                  </div>
                  <p className="mt-1 text-[#555]">{comment.content}</p>
                  <div className="mt-2 flex items-center gap-4">
                    <button className="flex items-center gap-1 text-gray-500 hover:text-[#0078d7] no-underline transition duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905v.714L7.5 9h-3a2 2 0 00-2 2v.5"
                        />
                      </svg>
                      <span>Thích</span>
                      {comment.likes > 0 && <span className="ml-1">{comment.likes}</span>}
                    </button>
                    <button className="text-gray-500 hover:text-[#0078d7] no-underline transition duration-200">
                      Trả lời
                    </button>
                  </div>
                  {comment.replies.length > 0 && (
                    <div className="ml-8 mt-4 space-y-4">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#f0f7ff] flex items-center justify-center font-medium text-[#0078d7]">
                            {reply.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-[#333]">{reply.author}</span>
                              <span className="text-gray-500 text-sm">{reply.timestamp}</span>
                            </div>
                            <p className="mt-1 text-[#555]">{reply.content}</p>
                            <div className="mt-2 flex items-center gap-4">
                              <button className="flex items-center gap-1 text-gray-500 hover:text-[#0078d7] no-underline transition duration-200">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905v.714L7.5 9h-3a2 2 0 00-2 2v.5"
                                  />
                                </svg>
                                <span>Thích</span>
                                {reply.likes > 0 && <span className="ml-1">{reply.likes}</span>}
                              </button>
                              <button className="text-gray-500 hover:text-[#0078d7] no-underline transition duration-200">
                                Trả lời
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default CommentSection;