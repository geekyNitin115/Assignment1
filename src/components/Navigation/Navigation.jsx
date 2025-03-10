// components/Navigation/Navigation.jsx
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src="/images/Group 19.png" alt="logo" />
          </div>
          <ul>
            <li>Products</li>
            <li>Customers</li>
            <li>Resources</li>
            <li>About Us</li>
            <li>Plans</li>
          </ul>
          <div className="button-group">
            <button className="login-btn">Login</button>
            <button className="demo-btn">Request a Demo</button>
          </div>
        </div>
      </nav>

      <header className="header">
        <div className="header-content">
          <h1>
            <span className="text-blue-gray">Unlock video’s full potential;</span>
            <br />
            <span className="text-orange">half of marketers haven’t yet!</span>
          </h1>

          <div className="media-section">
            <button className="media-button">Media+</button>
            <p className="equals-sign">=</p>
            <h2 className="engage-text">Engage 😃</h2>
          </div>

          <p className="subtext">
            Netflix-style video discovery for your prospects that turns viewers into customers.
          </p>

          <button className="request-demo-btn">Request a Demo</button>
        </div>
      </header>
    </div>
  );
};

export default Navigation;