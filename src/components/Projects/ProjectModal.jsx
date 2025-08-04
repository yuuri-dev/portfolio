import React, { useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const ProjectModal = ({ isOpen, onClose, info }) => {
  if (!isOpen) return null;

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* 背景オーバーレイ */}
      <div
        className="fixed inset-0 z-40 backdrop-blur-sm bg-black/40"
        onClick={onClose}
      />

      {/* モーダル本体 */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
          {/* 閉じるボタン */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
          >
            &times;
          </button>

          {/* コンテンツ */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-2">{info.name}</h2>
            <p className="text-gray-500 mb-4">{info.sub_title}</p>
            <div className="border border-black rounded my-3">
              <img
                src={info.img1}
                alt="アプリ画像"
                className="w-full rounded max-h-[300px] object-cover"
              />
            </div>

            <div className="border border-black rounded my-3">
              <img
                src={info.img2}
                alt="アプリ画像"
                className="w-full rounded max-h-[300px] object-cover"
              />
            </div>
            <p className="text-lg mb-2">{info.description}</p>
            <p className="text-sm text-gray-600 mb-4">
              制作期間: {info.period}
            </p>

            {info.stack && (
              <div className="mb-4">
                <p className="font-semibold">使用技術:</p>
                <ul className="flex flex-wrap justify-center gap-2 mt-1 text-sm text-gray-700">
                  {info.stack.map((tech, index) => (
                    <li key={index} className="bg-gray-200 px-2 py-1 rounded">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(info.githubUrl || info.liveUrl) && (
              <div className="flex gap-4 pt-4">
                {info.githubUrl && (
                  <Link
                    href={info.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Link>
                )}
                {info.liveUrl && (
                  <Link
                    href={info.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
