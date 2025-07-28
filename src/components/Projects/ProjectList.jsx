import React from 'react';

const ProjectList = ({ info }) => {
  const handleShowDetail = () => {
    console.log(`${info.name} をクリック`);
  };

  return (
    <div
      onClick={handleShowDetail}
      className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
    >
      <img
        src={info.img}
        alt="アプリ画像"
        className="w-full h-70 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{info.name}</h3>
        <p className="text-gray-600 mt-2">{info.description}</p>
      </div>
    </div>
  );
};

export default ProjectList;
