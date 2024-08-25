import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="flex flex-col bg-[url('https://i.ibb.co/tC8Tg1B/1.jpg')] min-h-screen bg-cover">
            <div className="flex gap-5 justify-end text-white p-10 font-bold">
                <Link to='/' className="link-hover">Home</Link>
                <Link to='/signUp' className="link-hover">Sign up</Link>
            </div>

            <div className="flex flex-col md:items-end items-center">
                <div className="text-white md:w-[40%]">
                    <p className="mt-4 mb-1 px-4">Name</p>
                    <input className="md:w-[70%] px-4 py-1 md:bg-green-500 bg-black bg-opacity-30 rounded-lg" type="text" name="" id="" required placeholder="Fojle Tuhin" />
                    <p className="mt-4 mb-1 px-4">E-mail</p>
                    <input className="md:w-[70%] px-4 py-1 md:bg-green-500 bg-black bg-opacity-30 rounded-lg" type="email" name="" id="" required placeholder="fojletuhin@gmail.com" />
                    <p className="mt-4 mb-1 px-4">Photo URL</p>
                    <input className="md:w-[70%] px-4 py-1 md:bg-green-500 bg-black bg-opacity-30 rounded-lg" type="text" name="" required placeholder="Enter photo Url" />
                    <p className="mt-4 mb-1 px-4">Password</p>
                    <input className="md:w-[70%] px-4 py-1 md:bg-green-500 bg-black bg-opacity-30 rounded-lg" type="password" name="" id="" required placeholder="**********" />

                    <br />
                    <button className="md:w-[70%] px-4 py-2 mt-5 bg-green-500 rounded-lg text-black font-bold" type="submit">Sign Up</button>

                </div>

            </div>
        </div>
    );
};

export default Login;