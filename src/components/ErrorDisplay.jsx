import PropTypes from "prop-types";
import "./ErrorDisplay.css";

const ErrorDisplay = ({ message, clearError }) => {
  return (
    <div className="ErrorMessage">
      {message}
      <button onClick={clearError} className="CloseButton">
        Close
      </button>
    </div>
  );
};

ErrorDisplay.propTypes = {
  message: PropTypes.string,
  clearError: PropTypes.func.isRequired,
};

export default ErrorDisplay;
