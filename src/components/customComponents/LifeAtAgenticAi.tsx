import React from 'react';

const CardLayout: React.FC = () => {
  return (
    <div className="flex space-x-4 p-4">
      {/* First Column */}
      <div className="flex flex-col space-y-4 w-1/3">
        {/* Text-based Card */}
        <div className="bg-gray-100 border border-gray-300 p-4 rounded shadow">
          <p>This is a text-based card. You can add any text content here.</p>
        </div>
        {/* Video-based Card */}
        <div className="bg-gray-100 border border-gray-300 p-4 rounded shadow">
          <video controls className="w-full h-auto">
            <source src="path-to-your-video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Second Column */}
      <div className="w-1/3">
        <div className="bg-gray-100 border border-gray-300 p-4 rounded shadow h-full">
          <video controls className="w-full h-full">
            <source src="path-to-your-video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Third Column */}
      <div className="flex flex-col space-y-4 w-1/3">
        {/* Video-based Card */}
        <div className="bg-gray-100 border border-gray-300 p-4 rounded shadow">
          <video controls className="w-full h-auto">
            <source src="path-to-your-video3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Video-based Card */}
        <div className="bg-gray-100 border border-gray-300 p-4 rounded shadow">
          <video controls className="w-full h-auto">
            <source src="path-to-your-video4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;