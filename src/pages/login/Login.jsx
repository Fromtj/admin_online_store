import logo from '../../assets/logo.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let navigate = useNavigate()
    function handleLogin(e) {
        e.preventDefault()
        let obj = {
            "userName": e.target['username'].value,
            "password": e.target['password'].value
          }
          Login(obj)
    }

    async function Login(obj) {
        try {
            const {data} = await axios.post('https://store-api.softclub.tj/Account/login', obj)
            localStorage.setItem('token', data.data)
            toast.success('Log in, success!')
            navigate("/")
        } catch (error) {
            console.error(error);
            toast.error('Log in, error!')
        }
    }
    return (
        <>
        <Toaster />
            <section className="w-[100%] h-[100vh] flex items-start">
                <div className="bg-[#1ABC9C] w-[50%] h-[100vh] flex items-center">
                    <div className='ml-[100px]'>
                        <p className="text-white text-[20px] font-sans font-[500] mb-[10px]">
                            Welcome to admin panel <span className="font-[cursive] text-[22px]">Ain shop</span>
                        </p>
                        <img className="w-[150px]" src={logo} alt="Logo" />
                    </div>
                </div>
                <div className="w-[50%] h-[100vh] flex items-center justify-center">
                    <div className="w-[300px]">
                        <p className="text-[24px] font-semibold mb-[20px]">Log In</p>
                       <form onSubmit={handleLogin}>
                       <TextField
                            name='username'
                            id="username"
                            label="User Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name='password'
                            id="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <Button
                            type='submit'
                            variant="contained"
                            sx={{
                                backgroundColor: '#1ABC9C',
                                ':hover': { backgroundColor: '#16A085' },
                                color: '#fff',
                                marginTop: '20px',
                            }}
                            fullWidth
                        >
                            Log in
                        </Button>
                       </form>
                    </div>
                </div>
            </section>
        </>
    );
}
   