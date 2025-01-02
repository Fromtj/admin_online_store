import { Outlet } from "react-router-dom"
import logo from '../../assets/logo.png'
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';

export default function Layout() {
    return(<>
    <header className="bg-[#1abc9ccd] w-[100%] py-[15px] fixed z-50">
        <div className="max-w-[1500px] m-auto flex items-center justify-evenly">
        <div>
            <img src={logo} className="w-[100px]" alt="" />
        </div>
        <div>
        <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
        </div>
        <div className="flex items-center gap-[10px]">
            <Avatar src="" alt="" /> 
            <p className="text-white text-[20px]">User Name</p>
        </div>
        </div>
    </header>
    <Outlet />
    </>)
}