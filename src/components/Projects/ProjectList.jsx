import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const ProjectList = ({ info }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
      >
        <img
          src={info.img}
          alt={info.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold">{info.name}</h3>
          <p className="text-gray-600 mt-2">{info.sub_title}</p>
        </div>
      </div>
      <ProjectModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        info={info}
      />
    </>
  );
};

export default ProjectList;
