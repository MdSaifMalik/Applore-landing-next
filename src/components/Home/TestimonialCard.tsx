import Image from "next/image";
import React from "react";

const TestimonialCard = () => {
  return (
    <div className="bg-white w-[350px] h-[450px] rounded-lg shadow-md overflow-hidden">
      {/* Video Frame */}
      <div className="h-[300px]  p-2">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/your-video-id"
          title="Product Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Product Owner Details */}
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold">John Doe</h2>
        <p className="text-gray-500">Product Owner, Buddy App</p>

        {/* App Logo */}
        <div className="mt-4">
          <Image
            src="/path-to-your-logo/logo.png"
            alt="Buddy App Logo"
            width={50}
            height={50}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
