import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { Clock } from 'lucide-react';

const ProjectList = ({ info }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group cursor-pointer bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
      >
        {/* サムネイル */}
        <div className="relative overflow-hidden h-48">
          <img
            src={info.thumbnail ?? info.images[0]}
            alt={info.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* ホバーオーバーレイ */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-sm font-semibold tracking-wide border border-white px-4 py-2 rounded-full">
              詳細を見る
            </span>
          </div>
        </div>

        {/* カード本体 */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{info.name}</h3>
          <p className="text-sm text-gray-500 mb-4">{info.sub_title}</p>

          {/* リリース */}
          {info.releasedAt && (
            <div className="flex items-center gap-1 text-xs text-gray-400 mb-3">
              <Clock size={12} />
              <span>{info.releasedAt}</span>
            </div>
          )}

          {/* スタックタグ */}
          {info.stack && (
            <div className="flex flex-wrap gap-2">
              {info.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
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
