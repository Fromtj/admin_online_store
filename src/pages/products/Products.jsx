import { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../store/useProduct";
import Button from '@mui/material/Button';

export default function Products() {
    const { data, getData, del, setIdx } = useProduct();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error('Log in, please!');
            navigate("/login");
        } else {
            getData();
        }
    }, [getData, navigate]);

    return (
     <section className="ml-[192px]">
           <section className="w-[100%] p-[25px]">
            <div className="w-[100%] flex justify-end my-[25px]">
            <Button variant="contained" sx={{backgroundColor: "#1ABC9C"}}>Add new +</Button>
            </div>
            <Toaster />
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="w-[1200px] text-left border-collapse">
                    <thead className="bg-gray-100 text-gray-600">
                        <tr>
                            <th className="px-4 py-2 border">Product</th>
                            <th className="px-4 py-2 border">Inventory</th>
                            <th className="px-4 py-2 border">Category</th>
                            <th className="px-4 py-2 border">Price</th>
                            <th className="px-4 py-2 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.length > 0 ? (
                            data.map((el) => (
                                <tr key={el.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border flex items-center gap-3">
                                        <Checkbox color="primary" />
                                        <img
                                            src={`https://store-api.softclub.tj/images/${el.image}`}
                                            alt={el.productName || `Product ${el.id}`}
                                            className="w-[40px] h-[40px] object-cover rounded-full"
                                        />
                                        <span className="font-medium text-gray-800">
                                            {el.productName || "No name"}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2 border">
                                        {el.quantity > 0 ? (
                                            <span>{el.quantity} in stock</span>
                                        ) : (
                                            <span className="text-red-500 font-medium">Out of stock</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-2 border">{el.categoryName || "N/A"}</td>
                                    <td className="px-4 py-2 border text-gray-700">
                                        ${el.hasDiscount ? el.discountPrice : el.price}
                                    </td>
                                    <td className="px-4 py-2 border flex items-center gap-2">
                                        <button
                                            className="text-blue-500 hover:bg-gray-200 p-1 rounded"
                                            title="Edit"
                                        >
                                            <EditIcon />
                                        </button>
                                        <button
                                            className="text-red-500 hover:bg-gray-200 p-1 rounded"
                                            title="Delete"
                                            onClick={() => {
                                                setIdx(el.id);
                                                del(el.id);
                                            }}
                                        >
                                            <DeleteIcon />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-4 text-gray-500">
                                    No products found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
     </section>
    );
}
