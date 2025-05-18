import axios from "axios"
import { useState } from "react"

const URL = "https://apiwebnews.onrender.com/api"

export const useFetchData = (endpoint) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(`${URL}/${endpoint}`)
            const items = response.data
            setData(items.data)
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }
    const updateData = async (id, updatedData) => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await axios.put(`${URL}/${endpoint}/${id}`, updatedData);
            const updatedItem = response.data;
            // Cập nhật dữ liệu trong state nếu cần
            setData(prevData =>
                prevData.map(item =>
                    item.id === id ? { ...item, ...updatedItem } : item
                )
            );
            return updatedItem; // Trả về dữ liệu đã cập nhật để BreakingNews sử dụng
        } catch (err) {
            console.error('Lỗi khi cập nhật dữ liệu:', err);
            setError(err.message);
            throw err; // Ném lỗi để BreakingNews xử lý
        } finally {
            setIsLoading(false);
        }
    };


    return {
        data,
        fetchData,
        updateData,
        isLoading
    }
}