import React from 'react';

const ProjectModal = ({ isOpen, onClose, info }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-30 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4">{info.name}</h2>
        <img
          src={info.img}
          alt="アプリ画像"
          className="w-full rounded mb-4 max-h-[400px] object-cover"
        />
        <p className="text-lg">{info.description}</p>
        {info.url && (
          <a
            href={info.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            アプリを見る
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;


