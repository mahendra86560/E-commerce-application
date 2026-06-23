import { useState, useEffect } from "react";
import {
  NavLink,
  Link,
  useNavigate
} from "react-router-dom";

import {
  FaUserCircle,
  FaShoppingCart,
  FaBars,
  FaTimes
} from "react-icons/fa";




function Navbar(){

  const [menuOpen,setMenuOpen] = useState(false);
  const [profileOpen,setProfileOpen] = useState(false);
  const [user,setUser] = useState(null);

  const navigate = useNavigate();


  // Check Login User
  useEffect(()=>{

    const token =
    localStorage.getItem("token");

    const userData =
    localStorage.getItem("user");


    if(token && userData){

      setUser(
        JSON.parse(userData)
      );

    }

  },[]);



  const logoutHandler = ()=>{

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    setUser(null);

    navigate("/login");

  };



  return(

<header className="navbar">


<div className="nav-container">


{/* Logo */}

<Link 
to="/"
className="logo"
>
ShopEase
</Link>



{/* Mobile Menu */}

<div
className="menu-icon"
onClick={()=>
setMenuOpen(!menuOpen)
}
>

{
menuOpen
?
<FaTimes/>
:
<FaBars/>
}

</div>



<nav
className={
menuOpen
?
"nav-links active"
:
"nav-links"
}
>


<NavLink to="/">
Home
</NavLink>


<NavLink to="/products">
Products
</NavLink>



<NavLink to="/cart">

<FaShoppingCart/>

Cart

</NavLink>



{

!user ?


<>


<NavLink 
to="/login"
className="login"
>
Login
</NavLink>



<NavLink
to="/signup"
className="signup"
>
Signup
</NavLink>


</>


:



<div
className="profile"
onMouseEnter={()=>
setProfileOpen(true)
}
onMouseLeave={()=>
setProfileOpen(false)
}
>


<button
className="profile-btn"
>

<FaUserCircle/>

{user.name}

</button>



{

profileOpen &&

<div
className="dropdown"
>


<Link to="/profile">
My Profile
</Link>


<Link to="/orders">
My Orders
</Link>


<button
onClick={logoutHandler}
>
Logout
</button>


</div>

}


</div>


}



</nav>


</div>


</header>


  );

}


export default Navbar;





