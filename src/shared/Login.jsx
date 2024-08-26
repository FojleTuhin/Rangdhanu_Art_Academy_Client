import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="flex flex-col bg-[url('https://i.ibb.co/1mms5rM/Green-Modern-Plant-Store-Login-Page-Desktop-Prototype.jpg')] min-h-screen bg-cover">
            <div className="flex gap-5 justify-end text-white p-10 font-bold">
                <Link to='/' className="link-hover">Home</Link>
                <Link to='/signUp' className="link-hover">Sign up</Link>
            </div>

            <div className="flex flex-col md:items-end items-center mt-44 md:mt-0">
                <div className="text-white md:w-[40%] w-[90%] p-5 rounded-lg bg-black bg-opacity-60 md:bg-none md:bg-opacity-0">
                   


                    <p className="mt-4 mb-1 px-4">E-mail</p>
                    <input className="md:w-[70%] w-full px-4 py-1  bg-black bg-opacity-30 rounded-lg" type="email" name="" id="" required placeholder="fojletuhin@gmail.com" />


                    <p className="mt-4 mb-1 px-4">Password</p>
                    <input className="md:w-[70%] w-full px-4 py-1  bg-black bg-opacity-30 rounded-lg" type="password" name="" id="" required placeholder="**********" />

                    <br />
                    <button className="md:w-[70%] w-full px-4 py-2 mt-5 bg-green-500 rounded-lg text-white font-bold" type="submit">Login</button>


                    <div className="text-center justify-center  md:w-[70%] font-bold mt-6">
                        <p >Or Sign in with</p>
                        <span className="flex justify-center mt-2"><FaGoogle className="text-3xl " /></span>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;