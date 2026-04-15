import React, { useEffect } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';
import Link from 'next/link';

const ProjectModal = ({ isOpen, onClose, info }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* 背景オーバーレイ（Headerより上の z-[60]）*/}
      <div
        className="fixed inset-0 z-[60] bg-black/50"
        onClick={onClose}
      />

      {/* モーダル全体ラッパー（外側クリックで閉じる）*/}
      <div
        className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-6"
        onClick={onClose}
      >
        {/* モーダル本体（クリック伝播を止める）*/}
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 閉じるボタン */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-1 text-gray-400 hover:text-black transition-colors"
          >
            <X size={20} />
          </button>

          {/* コンテンツ */}
          <div className="p-6 sm:p-8 flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-1">{info.name}</h2>
            <p className="text-gray-500 mb-6">{info.sub_title}</p>

            {/* 画像（object-contain で縦長でも全体表示）*/}
            {info.img1 && (
              <div className="w-full bg-gray-50 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                <img
                  src={info.img1}
                  alt="アプリ画像1"
                  className="w-full max-h-64 object-contain"
                />
              </div>
            )}
            {info.img2 && info.img2 !== info.img1 && (
              <div className="w-full bg-gray-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src={info.img2}
                  alt="アプリ画像2"
                  className="w-full max-h-64 object-contain"
                />
              </div>
            )}

            <p className="text-base text-gray-700 mb-3 text-left w-full">{info.description}</p>
            <p className="text-sm text-gray-400 mb-5 w-full text-left">
              制作期間: {info.period}
            </p>

            {info.stack && (
              <div className="mb-6 w-full text-left">
                <p className="text-sm font-semibold text-gray-600 mb-2">使用技術</p>
                <ul className="flex flex-wrap gap-2 text-sm text-gray-600">
                  {info.stack.map((tech, index) => (
                    <li key={index} className="bg-gray-100 px-3 py-1 rounded-full">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(info.githubUrl || info.liveUrl) && (
              <div className="flex flex-wrap gap-3 w-full">
                {info.githubUrl && (
                  <Link
                    href={info.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition"
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
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition"
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
