import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function Profile() {

  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {

    const userData =
      JSON.parse(
        localStorage.getItem("user")
      );

    if (userData) {
      setUser(userData);
    }

  }, []);

  const logoutHandler = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-image">

          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Profile"
          />

        </div>

        <h2>
          {user.name}
        </h2>

        <p className="email">
          {user.email}
        </p>

        <div className="profile-info">

          <div className="info-box">

            <h4>Name</h4>

            <p>
              {user.name}
            </p>

          </div>

          <div className="info-box">

            <h4>Email</h4>

            <p>
              {user.email}
            </p>

          </div>

          <div className="info-box">

            <h4>Role</h4>

            <p>
              {user.role || "Customer"}
            </p>

          </div>

        </div>

        <div className="profile-buttons">

          <button
            className="edit-btn"
          >
            Edit Profile
          </button>

          <button
            className="logout-btn"
            onClick={logoutHandler}
          >
            Logout
          </button>

        </div>

      </div>

    </div>

  );

}

export default Profile;