import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/FirebaseProvider";


const Login = () => {

    const { signIn, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        signIn(email, password)
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(error=>{
                console.log(error);
                setError('Email or password do not match');
            })



    }


    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(error=>{
                console.log(error);
            })

    }



    return (
        <div className="flex flex-col bg-[url('https://i.ibb.co/1mms5rM/Green-Modern-Plant-Store-Login-Page-Desktop-Prototype.jpg')] min-h-screen bg-cover">


        
            <div className="flex gap-5 justify-end text-white p-10 font-bold">
                <Link to='/' className="link-hover">Home</Link>
                <Link to='/signUp' className="link-hover">Sign up</Link>
            </div>

            <div className="flex flex-col lg:items-end items-center mt-44 md:mt-44 lg:mt-0">
                <div className="text-white lg:w-[40%] w-[90%] p-5 rounded-lg bg-black bg-opacity-60 lg:bg-none lg:bg-opacity-0">



                    <form onSubmit={handleLogin}>
                        <p className="mt-4 mb-1 px-4">E-mail</p>
                        <input className="lg:w-[70%] w-full px-4 py-1  bg-black bg-opacity-30 rounded-lg" type="email" name="email" required placeholder="abc@gmail.com" />


                        <p className="mt-4 mb-1 px-4">Password</p>
                        <input className="lg:w-[70%] w-full px-4 py-1  bg-black bg-opacity-30 rounded-lg" type="password" name="password" required placeholder="**********" />

                        <br />
                        {
                            error && <p className=" lg:w-[70%] mt-5 text-center text-red-500">{error}</p>
                        }
                        <button className="lg:w-[70%] w-full px-4 py-2 mt-5 bg-green-500 rounded-lg text-white font-bold" type="submit">Login</button>
                    </form>


                    <div className="text-center justify-center  lg:w-[70%] font-bold mt-6">
                        <p >Or Sign in with</p>
                        <span className="flex justify-center mt-2 cursor-pointer"><FaGoogle onClick={handleGoogleLogin} className="text-3xl " /></span>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;