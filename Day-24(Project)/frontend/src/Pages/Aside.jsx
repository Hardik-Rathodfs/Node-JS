import React from 'react'
import { Link } from 'react-router-dom'

const Aside = () => {
  return (
    <div>
          <aside className="probootstrap-aside js-probootstrap-aside">
    <a
      href="#"
      className="probootstrap-close-menu js-probootstrap-close-menu d-md-none"
    >
      <span className="oi oi-arrow-left" /> Close
    </a>
    <div
      className="probootstrap-site-logo probootstrap"
   
    >
      <a href="index.html" className="mb-2 d-block probootstrap-logo">
        Aside
      </a>
    </div>
    <div className="probootstrap-overflow">
      <nav className="probootstrap-nav">
        <ul>
          <li
          >
          <Link to={"/"}>
            Home
          </Link>
          </li>
     
          <li >
            <Link to={"/write-blog"}>
              Write Blog
            </Link>
          </li>
          <li >
            <Link to={"/my-blog"}>
              My Blogs
            </Link>
          </li>
          <li >
            <Link to={"/signup"}>
            Signup
            
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <footer
        className="probootstrap-aside-footer probootstrap"
  
      >
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
      
      </footer>
    </div>
  </aside>
    </div>
  )
}

export default Aside