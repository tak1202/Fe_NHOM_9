import { useState } from 'react';

export default function CommentSection({ newsId }) {
  console.log('CommentSection rendered, newsId:', newsId);

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Honest',
      avatar: 'H',
      content: 'Bà Cao Ngọc Dung xứng đáng gương mặt tiêu biểu 50 năm phát triển kinh tế TPHCM.',
      timestamp: '5h trước',
      likes: 87,
      replies: [
        {
          id: 101,
          author: 'Đức Dũng. HY',
          avatar: 'Đ',
          content:
            'Khi bà còn trẻ mới ngoài 30 tuổi mà ý trí và tư duy kinh doanh độc lập của bà thật đáng ngưỡng mộ và nể phục.',
          timestamp: '5h trước',
          likes: 64,
        },
      ],
    },
    {
      id: 2,
      author: 'Trần Văn B',
      avatar: 'T',
      content: 'Tin này rất bổ ích, cảm ơn tòa soạn đã chia sẻ!',
      timestamp: '7h trước',
      likes: 42,
      replies: [],
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 10,
        author: 'Người dùng',
        avatar: 'N',
        content: comment,
        timestamp: 'Vừa xong',
        likes: 0,
        replies: [],
      };
      setComments([newComment, ...comments]);
      setComment('');
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-[0_5px_20px_rgba(0,0,0,0.05)] p-6">
      <h3 className="text-xl font-semibold text-[#333] mb-4 border-b border-[#eee] pb-2 relative">
        Bình luận
        <span className="absolute bottom-[-1px] left-0 w-16 h-[3px] bg-gradient-to-r from-[#0078d7] to-[#00a1ff] rounded"></span>
      </h3>
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
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-[#0078d7] flex items-center justify-center font-medium text-white">
            N
          </div>
          <div className="flex-1">
            <textarea
              className="w-full p-3 border border-[#e0e0e0] rounded-lg focus:ring-2 focus:ring-[#0078d7] focus:border-transparent transition duration-300 placeholder-gray-400 bg-white shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:border-[#0078d7]"
              rows="3"
              placeholder="Viết bình luận của bạn..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <div className="mt-2 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-[#0078d7] to-[#005fa3] text-white rounded-lg hover:bg-gradient-to-r hover:from-[#005fa3] hover:to-[#003f6c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0078d7] transition duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_25px_rgba(0,120,215,0.15)] hover:-translate-y-0.5 disabled:bg-gray-400 disabled:shadow-none disabled:cursor-not-allowed"
                disabled={!comment.trim()}
              >
                Đăng bình luận
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}