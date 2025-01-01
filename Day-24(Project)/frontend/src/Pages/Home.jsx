import React, { useEffect, useState } from 'react'
import image1 from '../image1/img_1.jpg'
import image2 from '../image1/img_2.jpg'
import image3 from "../image1/img_3.jpg"
import image4 from "../image1/img_4.jpg"
import image5 from "../image1/img_5.jpg"
import image6 from "../image1/img_6.jpg"
import image7 from "../image1/img_7.jpg"
import image8 from "../image1/img_8.jpg"
import image9 from "../image1/img_9.jpg"
import image10 from "../image1/img_10.jpg"
import image11 from "../image1/img_11.jpg"
import image12 from "../image1/img_12.jpg"
import image13 from "../image1/img_13.jpg"
import image14 from "../image1/img_14.jpg"
import image15 from "../image1/img_15.jpg"
import image16 from "../image1/img_16.jpg"
import image17 from "../image1/img_17.jpg"
import image18 from "../image1/img_18.jpg"
import image19 from "../image1/img_19.jpg"
import image20 from "../image1/img_20.jpg"
import image21 from "../image1/img_21.jpg"
import { Link } from 'react-router-dom'
import Aside from './Aside'

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:8080/allBlogs"); 
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
       <>

        <Aside/>

  <main role="main" className="probootstrap-main js-probootstrap-main">
    <div className="probootstrap-bar">
      <a href="#" className="probootstrap-toggle js-probootstrap-toggle">
        <span className="oi oi-menu" />
      </a>
      <div className="probootstrap-main-site-logo">
        <a href="index.html">Aside</a>
      </div>
    </div>
    <div className="card-columns">
     {/*  */}
     
     {blogs.map((el) => {
       return (
         <div className="card" key={el.id}>
           <img
             className="card-img-top probootstrap"
             src={el.image}
             alt="Card image cap"
           />
           <h4>{el.date}</h4>
           <div className='textbox'>
             <h4>{el.title}</h4>
             <p>{el.description}</p>
           </div>
         </div>
       );
     })}
     {/*  */}
      <div className="card">
        <Link to="/blog/1">
          <img
            className="card-img-top probootstrap"
            src={image1}
            alt="Card image cap"
          />
          <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/blog/2">
          <img
            className="card-img-top probootstrap"
            src={image2}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/blog/3">
          <img
            className="card-img-top probootstrap"
            src={image3}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card img-loaded">
        <Link to="/blog/4">
          <img
            className="card-img-top probootstrap"
            src={image4}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/blog/5">
          <img
            className="card-img-top probootstrap"
            src={image5}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/blog/6">
          <img
            className="card-img-top probootstrap"
            src={image6}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/blog/7">
          <img
            className="card-img-top probootstrap"
            src={image7}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/blog/8">
          <img
            className="card-img-top probootstrap"
            src={image8}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/blog/9">
          <img
            className="card-img-top probootstrap"
            src={image9}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/blog/10">
          <img
            className="card-img-top probootstrap"
            src={image10}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/blog/11">
          <img
            className="card-img-top probootstrap"
            src={image11}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/blog/12">
          <img
            className="card-img-top probootstrap"
            src={image12}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/blog/13">
          <img
            className="card-img-top probootstrap"
            src={image13}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/blog/14">
          <img
            className="card-img-top probootstrap"
            src={image14}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/blog/15">
          <img
            className="card-img-top probootstrap"
            src={image15}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/blog/16">
          <img
            className="card-img-top probootstrap"
            src={image16}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/blog/17">
          <img
            className="card-img-top probootstrap"
            src={image17}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/blog/18">
          <img
            className="card-img-top probootstrap"
            src={image18}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/blog/19">
          <img
            className="card-img-top probootstrap"
            src={image19}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/blog/20">
          <img
            className="card-img-top probootstrap"
            src={image20}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/blog/21">
          <img
            className="card-img-top probootstrap"
            src={image21}
            alt="Card image cap"
          />
            <div className='textbox'>
            <h4>Heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non ea quo reprehenderit sapiente iste iure atque qui, repellendus similique ad temporibus, at, quidem corrupti porro quas mollitia voluptate soluta!</p>
          
          </div>
        </Link>
      </div>
    </div>
    <div className="container-fluid d-md-none">
      <div className="row">
        <div className="col-md-12">
          <ul className="list-unstyled d-flex probootstrap-aside-social">
            <li>
              <a href="#" className="p-2">
                <span className="icon-twitter" />
              </a>
            </li>
            <li>
              <a href="#" className="p-2">
                <span className="icon-instagram" />
              </a>
            </li>
            <li>
              <a href="#" className="p-2">
                <span className="icon-dribbble" />
              </a>
            </li>
          </ul>
          <p>
            © 2017{" "}
            <a href="https://uicookies.com/" target="_blank">
              uiCookies:Aside
            </a>
            . <br /> All Rights Reserved. Designed by{" "}
            <a href="https://uicookies.com/" target="_blank">
              uicookies.com
            </a>
          </p>
        </div>
      </div>
    </div>
  </main>
</>

    </div>
  )
}

export default Home