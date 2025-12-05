import { Github, Twitter, Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2025 Yuuri Inoue
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/yuuri-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://twitter.com/yuuri5117"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://qiita.com/yuuri17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <img
                src="/images/qiita.png"
                alt="Qiita"
                width={20}
                height={20}
                className="filter grayscale hover:grayscale-0"
              />
              <span className="sr-only">Qiita</span>
            </a>
            <a
              href="mailto:yuuri041125@icloud.com"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
