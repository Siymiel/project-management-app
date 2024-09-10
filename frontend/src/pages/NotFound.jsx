import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle className="text-danger" size="5em" />
      <h1>404</h1>
      <p className="lead">Sorry, page does not exist</p>
      <Link to="/" className="text-blue-600 underline mt-4">
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
