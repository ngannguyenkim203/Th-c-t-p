import { useLocation } from "react-router-dom";
import "../../styles/progressBar.css";

const ProgressBar = () => {
  const location = useLocation();

  // Xác định step hiện tại
  const step = location.pathname.includes("success")
    ? 3
    : location.pathname.includes("payment")
    ? 2
    : 1;
 
  return (
    <div className="progress-wrapper">
      {/* Step 1 */}
      <div className={`progress-step ${step >= 1 ? "active" : ""}`}>
        <i className="fas fa-shopping-cart"></i>
        <span>Checkout</span>
      </div>

      {/* Line 1 */}
      <div className={`progress-line ${step >= 2 ? "active" : ""}`}>
        <div className={`check-icon ${step >= 2 ? "show" : ""}`}>
          <i className="fas fa-check"></i>
        </div>
      </div>

      {/* Step 2 */}
      <div className={`progress-step ${step >= 2 ? "active" : ""}`}>
        <i className="fas fa-credit-card"></i>
        <span>Payment</span>
      </div>

      {/* Line 2 */}
      <div className={`progress-line ${step >= 3 ? "active" : ""}`}>
        <div className={`check-icon ${step >= 3 ? "show" : ""}`}>
          <i className="fas fa-check"></i>
        </div>
      </div>

      {/* Step 3 */}
      <div className={`progress-step ${step >= 3 ? "active" : ""}`}>
        <i className="fas fa-box"></i>
        <span>Success</span>
      </div>
    </div>
  );
};

export default ProgressBar;
