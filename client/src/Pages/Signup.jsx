import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";



function Signup() {

    const navigate = useNavigate();


    const [user, setUser] = useState({

        name: "",
        email: "",
        password: ""

    });


    const [message, setMessage] = useState("");



    // Input Change

    const handleChange = (e) => {

        setUser({

            ...user,

            [e.target.name]: e.target.value

        });

    };



    // Submit Form

    const handleSubmit = async (e) => {

        e.preventDefault();


        try {

            const response = await axiosInstance.post("/auth/register", user);
            console.log(response.data);
            setMessage("Registration Successful");
            setTimeout(() => {
                navigate("/login");
            }, 1000);

        }
        catch (error) {
            console.log(error);
            setMessage(error.response?.data?.message || "Something went wrong"
            );

        }


    };



    return (

        <div className="signup-container">


            <div className="signup-card">


                <h1>
                    Create Account
                </h1>


                <p>
                    Join ShopEase
                </p>



                {
                    message &&

                    <div className="message">

                        {message}

                    </div>
                }




                <form onSubmit={handleSubmit}>


                    <input

                        type="text"

                        name="name"

                        placeholder="Enter Name"

                        value={user.name}

                        onChange={handleChange}

                        required

                    />



                    <input

                        type="email"

                        name="email"

                        placeholder="Enter Email"

                        value={user.email}

                        onChange={handleChange}

                        required

                    />



                    <input

                        type="password"

                        name="password"

                        placeholder="Enter Password"

                        value={user.password}

                        onChange={handleChange}

                        required

                    />



                    <button type="submit">

                        Signup

                    </button>



                </form>




                <p className="login-text">

                    Already have account?

                    <Link to="/login">

                        Login

                    </Link>

                </p>



            </div>


        </div>

    );

}


export default Signup;