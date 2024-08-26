import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/FirebaseProvider";

const Register = () => {


    const { createUser, updateUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignup = (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photoURL.value;



        if (password.length < 6) {
            console.log('Wrong');
            return
        }

        createUser(email, password)
        .then(result => {
            console.log(result);

            updateUser(name, photoURL)
            const userInfo = {
                name,
                email,
                photoURL,
                role:'regularUser'
            }
            navigate('/');
            console.log(userInfo);
        })
    }

    const handleGoogleLogin = () => {
        googleLogin()
           .then(result=>{
            console.log(result);
            navigate('/');
           })
    }




    return (
        <div>
            <div className="flex flex-col bg-[url('https://i.ibb.co/tC8Tg1B/1.jpg')] min-h-screen bg-cover">
                <div className="flex gap-5 justify-end text-white p-10 font-bold">
                    <Link to='/' className="link-hover">Home</Link>
                    <Link to='/login' className="link-hover">Login</Link>
                </div>

                <div className="flex flex-col lg:items-end items-center md:mt-44 lg:mt-0">
                    <div className="text-white lg:w-[40%] w-[90%] p-5 rounded-lg bg-black bg-opacity-60 lg:bg-none lg:bg-opacity-0">
                        <form onSubmit={handleSignup}>
                            <p className="mt-4 mb-1 px-4">Name</p>
                            <input className="lg:w-[70%] w-full px-4 py-1  bg-black bg-opacity-30 rounded-lg" type="text" name="name"  required placeholder="Fojle Tuhin" />


                            <p className="mt-4 mb-1 px-4">E-mail</p>
                            <input className="lg:w-[70%] w-full px-4 py-1  bg-black bg-opacity-30 rounded-lg" type="email" name="email"  required placeholder="fojletuhin@gmail.com" />


                            <p className="mt-4 mb-1 px-4">Photo URL</p>
                            <input className="lg:w-[70%] w-full px-4 py-1  bg-black bg-opacity-30 rounded-lg" type="text" name="photoURL" required placeholder="Enter photo Url" />


                            <p className="mt-4 mb-1 px-4">Password</p>
                            <input className="lg:w-[70%] w-full px-4 py-1  bg-black bg-opacity-30 rounded-lg" type="password" name="password" required placeholder="**********" />

                            <br />
                            <button className="lg:w-[70%] w-full px-4 py-2 mt-5 bg-green-500 rounded-lg text-white font-bold" type="submit">Sign up</button>
                        </form>


                        <div className="text-center justify-center  lg:w-[70%] font-bold mt-6">
                            <p >Or Sign Up with</p>
                            <span className="flex justify-center mt-2 cursor-pointer"><FaGoogle onClick={handleGoogleLogin} className="text-3xl" /></span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;