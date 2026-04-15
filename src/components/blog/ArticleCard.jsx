import { ExternalLink } from 'lucide-react';

const ArticleCard = ({ title, href, date, badge, externalHref, hoverColor = 'hover:text-blue-600' }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between">
      {/* バッジ */}
      {badge && (
        <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full mb-3 w-fit ${badge.className}`}>
          {badge.icon}
          {badge.label}
        </span>
      )}

      {/* タイトル */}
      <a href={href} className={`flex-1 text-gray-900 ${hoverColor} transition-colors`}>
        <h3 className="text-base font-semibold leading-snug line-clamp-3">
          {title}
        </h3>
      </a>

      {/* フッター */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-xs text-gray-400">
          {new Date(date).toLocaleDateString('ja-JP')}
        </p>
        {externalHref && (
          <a
            href={externalHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-gray-300 hover:text-green-500 transition-colors"
            aria-label="外部サイトで読む"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
