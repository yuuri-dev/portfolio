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

  const images = info.images ?? [];
  const isMultiple = images.length > 1;

  return (
    <>
      {/* 背景オーバーレイ */}
      <div className="fixed inset-0 z-[60] bg-black/50" onClick={onClose} />

      {/* モーダル全体ラッパー（外側クリックで閉じる）*/}
      <div
        className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-6"
        onClick={onClose}
      >
        {/* モーダル本体 */}
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

          <div className="p-6 sm:p-8">
            {/* タイトル */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-1">{info.name}</h2>
            {info.sub_title && (
              <p className="text-gray-500 mb-6">{info.sub_title}</p>
            )}

            {/* 説明文 */}
            {info.description && (
              <pre className="text-base text-gray-700 mb-4 leading-relaxed">
                {info.description}
              </pre>
            )}

            {/* 画像グリッド */}
            {images.length > 0 && (
              <div
                className={`grid gap-2 mb-6 ${isMultiple ? 'grid-cols-2' : 'grid-cols-1'}`}
              >
                {images.map((src, i) => {
                  const isLastOdd =
                    isMultiple &&
                    images.length % 2 !== 0 &&
                    i === images.length - 1;
                  return (
                    <div
                      key={i}
                      className={`bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center ${isLastOdd ? 'col-span-2' : ''}`}
                    >
                      <img
                        src={src}
                        alt={`${info.name} 画像${i + 1}`}
                        className={`object-contain ${isLastOdd ? 'max-h-48 w-1/2' : 'max-h-64 w-full'}`}
                      />
                    </div>
                  );
                })}
              </div>
            )}

            {/* 制作期間 */}
            {info.period && (
              <p className="text-sm text-gray-400 mb-5">
                制作期間: {info.period}
              </p>
            )}

            {/* 使用技術 */}
            {info.stack && info.stack.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-600 mb-2">
                  使用技術
                </p>
                <ul className="flex flex-wrap gap-2 text-sm text-gray-600">
                  {info.stack.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* リンクボタン */}
            {(info.githubUrl || info.liveUrl || info.lpUrl) && (
              <div className="flex flex-wrap gap-3">
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
                {info.lpUrl && (
                  <Link
                    href={info.lpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    LP サイト
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
