import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product1 from '../assets/images/product-01.jpg';
import Product2 from '../assets/images/product-02.jpg';
import Product3 from '../assets/images/product-03.jpg';
import Product4 from '../assets/images/product-04.jpg';
import Product5 from '../assets/images/product-05.jpg';
import Product6 from '../assets/images/product-06.jpg';
import Product7 from '../assets/images/product-07.jpg';
import Product8 from '../assets/images/product-08.jpg';
import Product9 from '../assets/images/product-09.jpg';
import Product10 from '../assets/images/product-10.jpg';
import Product11 from '../assets/images/product-11.jpg';
import Product12 from '../assets/images/product-12.jpg';
import Product13 from '../assets/images/product-13.jpg';
import Product14 from '../assets/images/product-14.jpg';
import Product15 from '../assets/images/product-15.jpg';
import Product16 from '../assets/images/product-16.jpg';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Sample product data (same as in Product.jsx)
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

  useEffect(() => {
    // Find the product with the matching ID
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  const handleAddToCart = () => {
    // Here you would add the product to cart
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  if (!product) {
    return <div className="container p-t-80">Product not found</div>;
  }

  return (
    <div>
      <section className="sec-product-detail bg0 p-t-65 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-7 p-b-30">
              <div className="p-l-25 p-r-30 p-lr-0-lg">
                <div className="wrap-slick3 flex-sb flex-w">
                  <div className="wrap-slick3-dots"></div>
                  <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>
                  <div className="slick3 gallery-lb">
                    <div className="item-slick3" data-thumb={product.image}>
                      <div className="wrap-pic-w pos-relative">
                        <img src={product.image} alt="IMG-PRODUCT" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 p-b-30">
              <div className="p-r-50 p-t-5 p-lr-0-lg">
                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                  {product.name}
                </h4>
                <span className="mtext-106 cl2">${product.price}</span>
                <p className="stext-102 cl3 p-t-23">{product.description}</p>
                <div className="p-t-33">
                  <div className="flex-w flex-r-m p-b-10">
                    <div className="size-204 flex-w flex-m respon6-item">
                      <div className="size-203 respon6-text">Color</div>
                      <div className="size-204 respon6-text">
                        <div className="rs1-select2 bor8 bg0">
                          <select className="js-select2" name="time">
                            <option>Choose an option</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>White</option>
                            <option>Grey</option>
                          </select>
                          <div className="dropDownSelect2"></div>
                        </div>
                      </div>
                    </div>
                    <div className="size-204 flex-w flex-m respon6-item">
                      <div className="size-203 respon6-text">Size</div>
                      <div className="size-204 respon6-text">
                        <div className="rs1-select2 bor8 bg0">
                          <select className="js-select2" name="time">
                            <option>Choose an option</option>
                            <option>Size S</option>
                            <option>Size M</option>
                            <option>Size L</option>
                            <option>Size XL</option>
                            <option>Size XXL</option>
                          </select>
                          <div className="dropDownSelect2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-w flex-c-m p-t-10">
                    <div className="w-size-204 flex-w flex-m respon6-item">
                      <div className="w-size-204 respon6-text">Quantity</div>
                      <div className="w-size-204 respon6-text">
                        <div className="bor8 bg0">
                          <input
                            className="stext-104 cl2 plh3 size-117 bor13 p-lr-20 m-r-10 m-tb-5"
                            type="number"
                            name="num"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-size-1-2">
                      <button
                        className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"
                        onClick={handleAddToCart}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex-t p-t-33 p-t-60">
                  <div className="flex-w flex-c-m p-b-10">
                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                      data-tooltip="Add to Wishlist"
                    >
                      <i className="zmdi zmdi-favorite"></i>
                    </a>
                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Facebook"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Twitter"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Google Plus"
                    >
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </div>
                  <a
                    href="#"
                    className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                    data-tooltip="Pinterest"
                  >
                    <i className="fa fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bor10 m-t-50 p-t-43 p-b-40">
          <div className="container">
            <div className="bor10 p-t-43 p-b-40">
              <div className="tab01">
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="description"
                    role="tabpanel"
                  >
                    <div className="how-itemhow1 p-b-30">
                      <h3 className="mtext-111 cl2 p-b-16">Product Description</h3>
                      <p className="stext-117 cl6 p-b-26">{product.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;