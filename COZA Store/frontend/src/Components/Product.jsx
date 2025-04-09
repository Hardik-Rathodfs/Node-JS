import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Product1 from '../assets/images/product-01.jpg'
import Product2 from '../assets/images/product-02.jpg'
import Product3 from '../assets/images/product-03.jpg'
import Product4 from '../assets/images/product-04.jpg'
import Product5 from '../assets/images/product-05.jpg'
import Product6 from '../assets/images/product-06.jpg'
import Product7 from '../assets/images/product-07.jpg'
import Product8 from '../assets/images/product-08.jpg'
import Product9 from '../assets/images/product-09.jpg'
import Product10 from '../assets/images/product-10.jpg'
import Product11 from '../assets/images/product-11.jpg'
import Product12 from '../assets/images/product-12.jpg'
import Product13 from '../assets/images/product-13.jpg'
import Product14 from '../assets/images/product-14.jpg'
import Product15 from '../assets/images/product-15.jpg'
import Product16 from '../assets/images/product-16.jpg'
import icon from '../assets/images/icon-heart-01.png'
import icon2 from '../assets/images/icon-heart-02.png'
import QuickView from './QuickView'

const Product = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Esprit Ruffle Shirt",
      price: 16.64,
      image: Product1,
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      category: "women"
    },
    {
      id: 2,
      name: "Herschel supply",
      price: 35.31,
      image: Product2,
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      category: "women"
    },
    {
      id: 3,
      name: "Only Check Trouser",
      price: 25.50,
      image: Product3,
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      category: "men"
    },
    {
      id: 4,
      name: "Classic Trench Coat",
      price: 75.00,
      image: Product4,
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      category: "women"
    },
    {
      id: 5,
      name: "Front Pocket Jumper",
      price: 34.75,
      image: Product5,
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      category: "women"
    },
    {
      id: 6,
      name: "Vintage Inspired Classic",
      price: 93.20,
      image: Product6,
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      category: "watches"
    },
    {
      id: 7,
      name: "Shirt in Stretch Cotton",
      price: 52.66,
      image: Product7,
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      category: "women"
    },
    {
      id: 8,
      name: "Pieces Metallic Printed",
      price: 18.96,
      image: Product8,
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      category: "women"
    },
    {
      id: 9,
      name: "Converse All Star Hi Plimsolls",
      price: 75.00,
      image: Product9,
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      category: "shoes"
    },
    {
      id: 10,
      name: "Femme T-Shirt In Stripe",
      price: 25.85,
      image: Product10,
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      category: "women"
    },
    {
      id: 11,
      name: "Herschel supply",
      price: 63.16,
      image: Product11,
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      category: "men"
    },
    {
      id: 12,
      name: "Herschel supply",
      price: 63.15,
      image: Product12,
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      category: "men"
    },
    {
      id: 13,
      name: "T-Shirt with Sleeve",
      price: 18.49,
      image: Product13,
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      category: "women"
    },
    {
      id: 14,
      name: "Pretty Little Thing",
      price: 54.79,
      image: Product14,
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      category: "women"
    },
    {
      id: 15,
      name: "Mini Silver Mesh Watch",
      price: 86.85,
      image: Product15,
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      category: "watches"
    },
    {
      id: 16,
      name: "Square Neck Back",
      price: 29.64,
      image: Product16,
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      category: "women"
    }
  ];

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
  };

  const handleAddToCart = (product) => {
    // Here you would add the product to cart
    // For now, we'll just navigate to the single product page
    navigate(`/product/${product.id}`);
  };

  return (
    <div>
          <section className="bg0 p-t-23 p-b-140">
        <div className="container">
          <div className="p-b-10">
            <h3 className="ltext-103 cl5">Product Overview</h3>
          </div>
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
                data-filter="*"
              >
                All Products
              </button>
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".women"
              >
                Women
              </button>
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".men"
              >
                Men
              </button>
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".bag"
              >
                Bag
              </button>
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".shoes"
              >
                Shoes
              </button>
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".watches"
              >
                Watches
              </button>
            </div>
            <div className="flex-w flex-c-m m-tb-10">
              <div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list" />
                <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
                Filter
              </div>
              <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search" />
                <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
                Search
              </div>
            </div>
            {/* Search product */}
            <div className="dis-none panel-search w-full p-t-10 p-b-15">
              <div className="bor8 dis-flex p-l-15">
                <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                  <i className="zmdi zmdi-search" />
                </button>
                <input
                  className="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  name="search-product"
                  placeholder="Search"
                />
              </div>
            </div>
            {/* Filter */}
            <div className="dis-none panel-filter w-full p-t-10">
              <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                <div className="filter-col1 p-r-15 p-b-27">
                  <div className="mtext-102 cl2 p-b-15">Sort By</div>
                  <ul>
                    <li className="p-b-6">
                      <a href="#" className="filter-link stext-106 trans-04">
                        Default
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="#" className="filter-link stext-106 trans-04">
                        Popularity
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="#" className="filter-link stext-106 trans-04">
                        Average rating
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a
                        href="#"
                        className="filter-link stext-106 trans-04 filter-link-active"
                      >
                        Newness
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="#" className="filter-link stext-106 trans-04">
                        Price: Low to High
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="#" className="filter-link stext-106 trans-04">
                        Price: High to Low
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="filter-col2 p-r-15 p-b-27">
                  <div className="mtext-102 cl2 p-b-15">Price</div>
                  <ul>
                    <li className="p-b-6">
                      <a
                        href="#"
                        className="filter-link stext-106 trans-04 filter-link-active"
                      >
                        All
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="#" className="filter-link stext-106 trans-04">
                        $0.00 - $50.00
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="#" className="filter-link stext-106 trans-04">
                        $50.00 - $100.00
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="#" className="filter-link stext-106 trans-04">
                        $100.00 - $150.00
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="#" className="filter-link stext-106 trans-04">
                        $150.00 - $200.00
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="#" className="filter-link stext-106 trans-04">
                        $200.00+
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="filter-col3 p-r-15 p-b-27">
                  <div className="mtext-102 cl2 p-b-15">Color</div>
                  <ul>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#222" }}
                      >
                        <i className="zmdi zmdi-circle" />
                      </span>
                      <a href="#" className="filter-link stext-106 trans-04">
                        Black
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#4272d7" }}
                      >
                        <i className="zmdi zmdi-circle" />
                      </span>
                      <a
                        href="#"
                        className="filter-link stext-106 trans-04 filter-link-active"
                      >
                        Blue
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#b3b3b3" }}
                      >
                        <i className="zmdi zmdi-circle" />
                      </span>
                      <a href="#" className="filter-link stext-106 trans-04">
                        Grey
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#00ad5f" }}
                      >
                        <i className="zmdi zmdi-circle" />
                      </span>
                      <a href="#" className="filter-link stext-106 trans-04">
                        Green
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#fa4251" }}
                      >
                        <i className="zmdi zmdi-circle" />
                      </span>
                      <a href="#" className="filter-link stext-106 trans-04">
                        {" "}
                        Red{" "}
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#aaa" }}
                      >
                        <i className="zmdi zmdi-circle-o" />
                      </span>
                      <a href="#" className="filter-link stext-106 trans-04">
                        White
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="filter-col4 p-b-27">
                  <div className="mtext-102 cl2 p-b-15">Tags</div>
                  <div className="flex-w p-t-4 m-r--5">
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Fashion
                    </a>
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Lifestyle
                    </a>
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Denim
                    </a>
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Streetstyle
                    </a>
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Crafts
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row isotope-grid">
            {products.map((product) => (
              <div key={product.id} className={`col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${product.category}`}>
              {/* Block2 */}
              <div className="block2">
                <div className="block2-pic hov-img0">
                    <img src={product.image} alt="IMG-PRODUCT" />
                    <div className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04">
                      <button 
                        className="flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04"
                        onClick={() => handleQuickView(product)}
                  >
                    Quick View
                      </button>
                      <button 
                        className="flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 m-l-10"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                  </div>
                </div>
                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l">
                    <a
                        href={`/product/${product.id}`}
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                        {product.name}
                    </a>
                      <span className="stext-105 cl3"> ${product.price} </span>
                  </div>
                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src={icon}
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src={icon2}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
          {/* Load more */}
          <div className="flex-c-m flex-w w-full p-t-45">
            <a
              href="#"
              className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
            >
              Load More
            </a>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {selectedProduct && (
        <QuickView 
          product={selectedProduct} 
          isOpen={isQuickViewOpen} 
          onClose={handleCloseQuickView} 
        />
      )}
    </div>
  )
}

export default Product