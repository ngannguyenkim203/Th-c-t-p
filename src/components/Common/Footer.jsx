import footerImg from "../../assets/logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 position-relative overflow-hidden">
      {/* Sóng phía trên */}
      <div className="footer-wave-top">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="wave-svg"
        >
          <path
            d="M0,32 C360,96 1080,0 1440,64 L1440,0 L0,0 Z"
            fill="#FAF9F6"
            opacity="1"
          ></path>
          <path
            d="M0,40 C400,100 1040,10 1440,70 L1440,0 L0,0 Z"
            fill="#FAF9F6"
            opacity="0.6"
          ></path>
          <path
            d="M0,48 C440,104 1000,20 1440,80 L1440,0 L0,0 Z"
            fill="#FAF9F6"
            opacity="0.3"
          ></path>
        </svg>
      </div>

      {/* Nội dung footer */}
      <div className="container mt-5">
        <div className="row">
          {/* Logo và mô tả */}
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img
                src={footerImg}
                alt="Logo"
                style={{ width: "50px", marginRight: "10px" }}
              />
              <p className="mb-0 fs-2 fw-bold">Care's Paws</p>
            </div>
            <p className="small fs-6">
              Welcome to Care's Paws, where animal lovers meet! <br />
              We are a website dedicated to delivering exceptional products and
              services to cater to your needs.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-light">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Categories</h6>
            <ul className="list-unstyled small">
              <li>Foods</li>
              <li>Toys</li>
              <li>Accessories</li>
              <li>Clothing</li>
              <li>Supplements</li>
              <li>Medicine</li>
            </ul>
          </div>

          {/* Shopping */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Shopping</h6>
            <ul className="list-unstyled small">
              <li>Payments</li>
              <li>Delivery options</li>
              <li>Buyer protection</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Customer care</h6>
            <ul className="list-unstyled small">
              <li>Help center</li>
              <li>Terms & Conditions</li>
              <li>Privacy policy</li>
              <li>Returns & refund</li>
              <li>Survey & feedback</li>
            </ul>
          </div>

          {/* Pages */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Pages</h6>
            <ul className="list-unstyled small">
              <li>Forum</li>
              <li>Shop</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center small">
          © 2024 Care's Paws Inc. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
