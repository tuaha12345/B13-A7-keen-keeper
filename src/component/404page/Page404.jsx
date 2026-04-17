import React from "react";

const Page404 = () => {
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-extrabold text-error opacity-20">404</h1>

      <div className="absolute">
        <h2 className="text-4xl font-bold mb-2 text-[#344D3F]">
          Oops! Page Not Found
        </h2>
        <p className="text-[#344D3F] mb-6 text-lg">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
      </div>
    </div>
  );
};

export default Page404;
