import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black px-6">
      <div className="text-center text-white max-w-md">
        <h1 className="text-9xl font-bold mb-4 animate-pulse">404</h1>
        <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-300 mb-6">
          The page you're looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition duration-300"
        >
          <FaArrowLeft className="mr-2" />
          Go back home
        </Link>
      </div>
    </div>
  );
}
