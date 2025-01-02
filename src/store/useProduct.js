import { create } from "zustand";
import axiosRequest from "../utils/axiosRequest";
import toast from "react-hot-toast";

export const useProduct = create((set) => ({
    data: [],
    getData: async () => {
        try {
            const response = await axiosRequest.get("https://store-api.softclub.tj/Product/get-products");
            set({ data: response.data.data.products });
        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error("Failed to fetch products");
        }
    },
    idx: null,
    setIdx: (value) => set({ idx: value }),
    del: async (id) => {
        try {
            await axiosRequest.delete(`https://store-api.softclub.tj/Product/delete-product?id=${id}`);
            toast.success("Product deleted successfully");
            const getData = set.getState().getData;
            await getData();
        } catch (error) {
            console.error("Error deleting product:", error);
            toast.error("Failed to delete product");
        }
    },
}));
