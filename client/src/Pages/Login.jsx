import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""

    });

    const [message, setMessage] = useState("");

    // Handle Input

    const handleChange = (e) => {

        setUser({ ...user,  [e.target.name]: e.target.value
 });
};
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post( "http://localhost:5001/api/auth/login",  user );
            console.log(response.data);
          
            localStorage.setItem( "token", response.data.token);
            localStorage.setItem(

                "user",

                JSON.stringify(
                    response.data.user
                )

            );



            setMessage(
                "Login Successful"
            );



            setTimeout(()=>{

                navigate("/");

            },1000);



        }


        catch(error){


            setMessage(

                error.response?.data?.message
                ||
                "Invalid Email or Password"

            );


        }


    };




    return(


        <div className="login-container">



            <div className="login-card">



                <h1>
                    Welcome Back
                </h1>


                <p>
                    Login to ShopEase
                </p>



                {
                    message &&

                    <div className="message">

                        {message}

                    </div>

                }




                <form onSubmit={handleSubmit}>


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

                        Login

                    </button>



                </form>




                <p className="signup-text">

                    Don't have an account?


                    <Link to="/signup">

                        Signup

                    </Link>


                </p>



            </div>



        </div>


    );

}


export default Login;