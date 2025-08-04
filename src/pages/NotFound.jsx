import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Galaxy from "../components/Galaxy";
// import loading from "../assets/images/loading-notfound.svg";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Galaxy background */}
      <div className="absolute inset-0 z-0">
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.5}
            glowIntensity={0.5}
            saturation={0.8}
            hueShift={240}
          />
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center text-white max-w-md">
          {/* <img src={loading} alt="" /> */}
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
    </div>
  );
}
