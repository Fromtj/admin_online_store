import { Link, Outlet } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FolderIcon from '@mui/icons-material/Folder';
import { useLocation } from 'react-router-dom';

export default function Layoutl() {
    const location = useLocation();

    return (
        <section className="w-[100%] flex pt-[92px]">
            <div className="px-[20px] h-[100vh] bg-[#1abc9ccd] fixed">
                <div className="grid grid-cols-1 gap-[5px]">
                    <Link 
                        to="/"
                        style={{ backgroundColor: location.pathname === '/' ? "white" : '#1abc9ccd' }}
                        className="flex items-center gap-[10px] px-[10px] py-[5px] rounded-[5px]"
                    >
                        <IconButton><HomeIcon sx={{ color: location.pathname === '/' ? "#1abc9ccd" : "white" }} /></IconButton>
                        <p style={{ color: location.pathname === '/' ? "#1abc9ccd" : "white" }} className="text-white text-[17px]">Dashboard</p>
                    </Link>
                    <Link 
                        to="/orders"
                        style={{ backgroundColor: location.pathname === '/orders' ? "white" : '#1abc9ccd' }}
                        className="flex items-center gap-[10px] px-[10px] py-[5px] rounded-[5px]"
                    >
                        <IconButton><ListIcon sx={{ color: location.pathname === '/orders' ? "#1abc9ccd" : "white" }} /></IconButton>
                        <p style={{ color: location.pathname === '/orders' ? "#1abc9ccd" : "white" }}  className="text-white text-[17px]">Orders</p>
                    </Link>
                    <Link 
                        to="/products"
                        style={{ backgroundColor: location.pathname === '/products' ? "white" : '#1abc9ccd' }}
                        className="flex items-center gap-[10px] px-[10px] py-[5px] rounded-[5px]"
                    >
                        <IconButton><LocalOfferIcon sx={{ color: location.pathname === '/products' ? "#1abc9ccd" : "white" }} /></IconButton>
                        <p style={{ color: location.pathname === '/products' ? "#1abc9ccd" : "white" }}  className="text-white text-[17px]">Products</p>
                    </Link>
                    <Link 
                        to="/other"
                        style={{ backgroundColor: location.pathname === '/other' ? "white" : '#1abc9ccd' }}
                        className="flex items-center gap-[10px] px-[10px] py-[5px] rounded-[5px]"
                    >
                        <IconButton><FolderIcon sx={{ color: location.pathname === '/other' ? "#1abc9ccd" : "white" }} /></IconButton>
                        <p style={{ color: location.pathname === '/other' ? "#1abc9ccd" : "white" }}  className="text-white text-[17px]">Other</p>
                    </Link>
                </div>
            </div>
            <Outlet />
        </section>
    );
}
