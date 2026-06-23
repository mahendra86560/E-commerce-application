import { Link } from "react-router-dom";
import {
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaShoppingBag
} from "react-icons/fa";




function Home() {


  const categories = [

    {
      title:"Fashion",
      image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050"
    },

    {
      title:"Electronics",
      image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661"
    },

    {
      title:"Accessories",
      image:
      "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561"
    }

  ];



  const features=[

    {
      icon:<FaTruck/>,
      title:"Fast Delivery",
      text:"Quick and safe delivery"
    },


    {
      icon:<FaShieldAlt/>,
      title:"Secure Payment",
      text:"100% secure transactions"
    },


    {
      icon:<FaHeadset/>,
      title:"24/7 Support",
      text:"Customer support anytime"
    },


    {
      icon:<FaShoppingBag/>,
      title:"Quality Products",
      text:"Premium products"
    }

  ];



  return (

    <div className="home">


      {/* Hero Section */}

      <section className="hero">


        <div className="hero-content">


          <h1>
            Shop Smart,
            Live Better
          </h1>


          <p>
            Discover latest fashion,
            electronics and accessories
            at the best prices.
          </p>


          <Link
          to="/products"
          className="shop-btn"
          >

            Shop Now

          </Link>


        </div>


      </section>





      {/* Categories */}


      <section className="category-section">


        <h2>
          Shop By Category
        </h2>



        <div className="category-grid">


          {
            categories.map((item,index)=>(

              <div
              className="category-card"
              key={index}
              >

                <img
                src={item.image}
                alt={item.title}
                />


                <h3>
                  {item.title}
                </h3>


              </div>

            ))
          }


        </div>


      </section>






      {/* Features */}


      <section className="features">


        {
          features.map((item,index)=>(


            <div
            className="feature-card"
            key={index}
            >

              <div className="feature-icon">

                {item.icon}

              </div>


              <h3>
                {item.title}
              </h3>


              <p>
                {item.text}
              </p>


            </div>


          ))
        }


      </section>





      {/* Banner */}


      <section className="offer">


        <h2>
          Get 50% Off On First Order
        </h2>


        <p>
          Sign up today and enjoy
          exclusive offers.
        </p>


        <Link
        to="/signup"
        >
          Create Account
        </Link>


      </section>



    </div>

  );

}


export default Home;