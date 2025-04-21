import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import newLogo from '../assets/news.png';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg w-full bg-white  rounded-xl shadow-lg p-32">
                <div className="text-center ">
                    <div className="flex justify-center mb-4">
                        <img 
                            src= {newLogo} 
                            alt="News Logo" 
                            className="h-52 w-52"
                        />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        Đăng nhập
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Truy cập tin tức mới nhất với tài khoản của bạn
                    </p>
                </div>

                <form className="space-y-6">
                    <div className="space-y-4">
                        <div className="p-64">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-400 bg-white shadow-sm"
                                placeholder="Nhập email của bạn"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Mật khẩu
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-400 bg-white shadow-sm"
                                placeholder="Nhập mật khẩu của bạn"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                                Ghi nhớ đăng nhập
                            </label>
                        </div>

                        <div className="text-sm">
                            <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500 transition duration-200">
                                Quên mật khẩu?
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 shadow-md"
                        >
                            Đăng nhập
                        </button>
                    </div>

                    <div className="text-center">
                        <span className="text-gray-500 text-sm">Chưa có tài khoản? </span>
                        <Link to="/register" className="text-sm font-medium text-blue-600 hover:text-blue-500 transition duration-200">
                            Đăng ký ngay
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}